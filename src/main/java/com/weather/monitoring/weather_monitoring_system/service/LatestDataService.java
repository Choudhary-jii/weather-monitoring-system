package com.weather.monitoring.weather_monitoring_system.service;

import com.weather.monitoring.weather_monitoring_system.model.LatestData;
import com.weather.monitoring.weather_monitoring_system.repository.LatestDataRepository;
import org.springframework.stereotype.Service;

@Service
public class LatestDataService {

    final private LatestDataRepository latestDataRepository; // Ensure this is injected

    public LatestDataService(LatestDataRepository latestDataRepository) {
        this.latestDataRepository = latestDataRepository;
    }

    public LatestData getLatestDataForCity(String city) {
        return latestDataRepository.findByCity(city);
    }
}
