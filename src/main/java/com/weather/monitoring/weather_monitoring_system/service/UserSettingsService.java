package com.weather.monitoring.weather_monitoring_system.service;

import com.weather.monitoring.weather_monitoring_system.model.UserSettings;
import com.weather.monitoring.weather_monitoring_system.repository.UserSettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserSettingsService {

    @Autowired
    private UserSettingsRepository userSettingRepository;

    // Fetch all user settings
    public List<UserSettings> getAllUserSettings() {
        return userSettingRepository.findAll();
    }

    // Save or update user settings
    public UserSettings saveUserSettings(UserSettings userSettings) {

        return userSettingRepository.save(userSettings);
    }
}
