/*
 *
 * Outpost Client Module
 * =====================
 * 
 * Created by Gideon Tong
 * 
 */

// Includes
#include "Arduino.h"
#include "WiFi.h"
#include "heltec.h"

// Definitions
#define     BAND        915E6           // Set to 915MHz IHS
const char* ssid        = "OutpostDev"; // WiFi name
const char* psk         = "test1234";   // WiFi password
int         progress    = 0;            // Progress bar indicator
String      header;                     // Stores WiFi header
WiFiServer  server(80);                 // Set webserver to port 80

// Functions
// Draws the progress bar
void progressDraw() {
    Heltec.display -> clear();
    Heltec.display -> drawProgressBar(0, 32, 120, 10, progress);
    Heltec.display -> setTextAlignment(TEXT_ALIGN_CENTER);
    Heltec.display -> drawString(64, 15, "Setup: " + String(progress) + "%");
    Heltec.display -> display();
}

// Main Program
void setup() {
    Heltec.begin(true /* Display */, false /* LoRa */, true /* Serial */);
    Heltec.display -> setContrast(255);
    Heltec.display -> clear();
    progressDraw();

    // Setting up the WiFi
    Serial.print("Setting up AP...");
    WiFi.softAP(ssid, psk);
    Serial.println(" Success!");
    progress = 33;
    progressDraw();
    
    // Make the IP address available
    Serial.print("IP address is: ");
    IPAddress IP = WiFi.softAPIP();
    Serial.println(IP);
    progress = 66;
    progressDraw();

    // Start the web server
    server.begin();
    progress = 100;
    progressDraw();
}

void loop() {
    WiFiClient client = server.available();
}
