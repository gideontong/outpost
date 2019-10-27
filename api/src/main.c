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
}

void loop() {
    Serial.println("Hello world!");
    delay(2000);
}