/*
 *
 * Outpost - Setup Code
 * ====================
 * 
 * Intended for the ESP32 with HelTec V2 LoRa and OLED
 * 
 * Parts of this code were adapted from:
 * Random Nerd Tutorials
 * 
 */

#include "Arduino.h"
#include "WiFi.h"
#include "heltec.h"

const char* ssid = "OutpostDev";
const char* psk  = "test1234";

WiFiServer server(80);

// Variable to store the HTTP request
String header;

// Auxiliar variables to store the current output state
String output26State = "off";
String output27State = "off";

// Assign output variables to GPIO pins
const int output26 = 26;
const int output27 = 27;

void setup() {
    Serial.begin(115200);
    // Initialize the output variables as outputs
    pinMode(output26, OUTPUT);
    pinMode(output27, OUTPUT);
    // Set outputs to LOW
    digitalWrite(output26, LOW);
    digitalWrite(output27, LOW);

    // Connect to Wi-Fi network with SSID and password
    Serial.print("Setting AP (Access Point)…");
    // Remove the password parameter, if you want the AP (Access Point) to be open
    WiFi.softAP(ssid, password);

    IPAddress IP = WiFi.softAPIP();
    Serial.print("AP IP address: ");
    Serial.println(IP);

    server.begin();
}

void loop() {
    Serial.println("Hello world!");
    delay(2000);
}