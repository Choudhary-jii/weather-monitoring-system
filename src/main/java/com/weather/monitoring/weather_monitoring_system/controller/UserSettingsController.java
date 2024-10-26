package com.weather.monitoring.weather_monitoring_system.controller;

import com.weather.monitoring.weather_monitoring_system.model.UserSettings;
import com.weather.monitoring.weather_monitoring_system.service.UserSettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/settings")
public class UserSettingsController {

    @Autowired
    private UserSettingsService userSettingsService;

    @PostMapping("/save")
    public ResponseEntity<String> saveUserSettings(@RequestBody UserSettings userSettings) {

        // Validate the incoming data
        if (userSettings.getTempThreshold() < -3 || userSettings.getTempThreshold() > 45) {
            return ResponseEntity.badRequest().body("Threshold value must be between -3 and 45.");
        }

        // Save the user settings to the database
        userSettingsService.saveUserSettings(userSettings);

        return ResponseEntity.ok("User settings saved successfully.");
    }
}



