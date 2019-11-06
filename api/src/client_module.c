/*
 *
 * +-----------------------+
 * | Outpost Client Module |
 * +-----------------------+
 * 
 * Created for use with the Outpost workspace client and long range Internet of Things data
 * transfer. This is the code for use on ESP32 and ESP-IF devices that are to be used only as
 * clients and not hosts.
 * 
 * Created on 27 October 2019
 * By Gideon Tong
 * 
 * Last updated on 5 November 2019
 * By Gideon Tong
 * 
 * There are no other editors to this document.
 * 
 * See the full tutorial at: https://www.github.com/gideontong/outpost. Wiki to come soon.
 * 
 */

// Includes
#include "Arduino.h"
#include "WiFi.h"
#include "heltec.h"

// Variables and definitions
#define     BAND        915E6           // Set to 915MHz IHS
#define     MAX_CLIENTS 4               // Maximum number of WiFi clients
const char* ssid        = "OutpostDev"; // WiFi name
const char* psk         = "test1234";   // WiFi password
int         progress    = 0;            // Progress bar indicator
String      header;                     // Stores WiFi header
String      packet;                     // Empty packet string
String      signal      = "--";         // RSSI signal strength represented as a decimal string
WiFiServer  server(80);                 // Set webserver to port 80

/*
 * 
 * Function: progressDraw()
 * 
 * This function takes no arguments and redraws the progress bar on the screen using the current
 * value of progress, which is a value between 0 and 100. This corresponds to the percentage of
 * the progress bar that has been completed.
 * 
 */
void progressDraw() {
    Heltec.display -> clear();
    Heltec.display -> drawProgressBar(0, 32, 120, 10, progress);
    Heltec.display -> setTextAlignment(TEXT_ALIGN_CENTER);
    Heltec.display -> drawString(64, 15, "Booting Outpost: " + String(progress) + "%");
    Heltec.display -> display();
}

/*
 * 
 * Function: viewStatus()
 * 
 * Draws the status of the device on the OLED. Currently detects the number of clients connected
 * to the WiFi network as well as the signal strength to the host device (no authentication is
 * currently supported, unfortunately).
 * 
 */
void viewStatus() {
    int clients = WiFi.softAPgetStationNum();
    Heltec.display -> clear();
    Heltec.display -> drawProgressBar(0, 32, 120, 10, (0.0 + clients) / MAX_CLIENTS * 100);
    Heltec.display -> setTextAlignment(TEXT_ALIGN_CENTER);
    Heltec.display -> drawString(64, 5, "Outpost is online!");
    Heltec.display -> drawString(64, 15, "Connected: " + String(clients) + "/" + String(MAX_CLIENTS));
    Heltec.display -> drawString(64, 45, "Signal strength: " + signal);
    Heltec.display -> display();
}

/*
 * 
 * Function: updateStatus(int)
 * 
 * This function has one parameter packetSize of type int. It is not a necessary function to
 * call as the purpose is to update the global variable with the current signal strength as
 * recieved by the latest packet from the host device.
 * 
 */
void updateStatus(int packetSize) {
    packet = "";
    for(int i = 0; i < packetSize; i++) {
        packet += (char) LoRa.read();
    }
    signal = String(LoRa.packetRssi(), DEC);
}

// Main Program
void setup() {
    Heltec.begin(true /* Display */, true /* LoRa */, true /* Serial */, true, BAND);
    Heltec.display -> setContrast(255);
    Heltec.display -> clear();
    progressDraw();

    // Setting up the WiFi
    Serial.print("Setting up AP...");
    WiFi.softAP(ssid, psk);
    Serial.println(" Success!");
    progress = 25;
    progressDraw();

    // Set up recieving on the LoRa module
    LoRa.receive();
    progress = 50;
    progressDraw();
    
    // Make the IP address available
    Serial.print("IP address is: ");
    IPAddress IP = WiFi.softAPIP();
    Serial.println(IP);
    progress = 75;
    progressDraw();

    // Start the web server
    server.begin();
    progress = 100;
    progressDraw();
}

void loop() {
    WiFiClient client = server.available();
    viewStatus();

    // LoRa recieving code
    int packetSize = LoRa.parsePacket();
    if (packetSize) {
        updateStatus(packetSize);
        packet = "";
        for (int i = 0; i < packetSize; i++) {
            packet += (char) LoRa.read();
        }
    }

    // Webserver code
    if(client) {
        Serial.println("New device connected!");
        String currentLine = "";
        while(client.connected()) {
            if(client.available()) {
                char c = client.read();
                Serial.write(c);
                header += c;
                if(c == '\n') {
                    if(currentLine.length() == 0) {
                        client.println("HTTP/1.1 200 OK");
                        client.println("Content-type:text/html");
                        client.println("Connection: close");
                        client.println();
                        client.println("<!DOCTYPE html><html>");
                        client.println("<head><title>Outpost</title></head>");
                        client.println("<body><h1>Outpost</h1>");
                        client.println("<h2>" + packet + "</h2></body>");
                        client.println("</html>");
                        client.println();
                        break;
                    } else {
                        currentLine = "";
                    }
                } else if(c != '\r') {
                    currentLine += c;
                }
            }
        }
        header = "";
        client.stop();
        Serial.println("Client disconnected.");
    }
}