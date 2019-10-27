/*
 *
 * Outpost Host Module
 * ===================
 * 
 * Created by Gideon Tong
 * 
 */

// Includes
#include "Arduino.h"
#include "WiFi.h"
#include "heltec.h"

// Definitions
#define      BAND     915E6   // Set to 915MHz IHS
int          progress = 0;    // Progress bar indicator
unsigned int counter  = 0;    // Counter
String       header;          // Stores WiFi header
String       packet;          // Empty packet string
String       signal   = "--"; // RSSI signal strength represented as a decimal string

// Functions
// Draws the progress bar
void progressDraw() {
    Heltec.display -> clear();
    Heltec.display -> drawProgressBar(0, 32, 120, 10, progress);
    Heltec.display -> setTextAlignment(TEXT_ALIGN_CENTER);
    Heltec.display -> drawString(64, 15, "Booting Outpost: " + String(progress) + "%");
    Heltec.display -> display();
}

// Draws the status screen
void viewStatus() {
    Heltec.display -> clear();
    Heltec.display -> drawProgressBar(0, 32, 120, 10, 100);
    Heltec.display -> setTextAlignment(TEXT_ALIGN_CENTER);
    Heltec.display -> drawString(64, 5, "Outpost is online!");
    Heltec.display -> drawString(64, 15, "Broadcasted: " + String(counter));
    Heltec.display -> drawString(64, 45, "SERVER HOST MODE");
    Heltec.display -> display();
}

// Main Program
void setup() {
    Heltec.begin(true /* Display */, true /* LoRa */, true /* Serial */, true, BAND);
    Heltec.display -> setContrast(255);
    Heltec.display -> clear();
    progress = 0;
    progressDraw();
    progress = 100;
    progressDraw();
}

void loop() {
    if(progress == 0) {
        progress = 100;
    } else {
        progress = 0;
    }
    viewStatus();
    
    // Send packets
    digitalWrite(LED, HIGH);
    LoRa.beginPacket();
    LoRa.setTxPower(14, RF_PACONFIG_PASELECT_PABOOST);
    LoRa.print(counter);
    LoRa.endPacket();
    digitalWrite(LED, LOW);
    counter++;

    delay(3000);
}
