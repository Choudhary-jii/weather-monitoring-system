package com.weather.monitoring.weather_monitoring_system.repository;


import com.weather.monitoring.weather_monitoring_system.model.UserSettings;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserSettingsRepository extends JpaRepository<UserSettings, Long> {

    List<UserSettings> findAll();

}

