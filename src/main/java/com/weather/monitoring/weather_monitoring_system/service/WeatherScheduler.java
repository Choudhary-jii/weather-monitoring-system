package com.weather.monitoring.weather_monitoring_system.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class WeatherScheduler {

    @Autowired
    private WeatherService weatherService;


    // Scheduled to run every 1 minute (10000 milliseconds)
    @Scheduled(fixedRate = 60000)
    public void fetchWeatherDataForCities() {
        // Call the new method to fetch weather data for all cities
        weatherService.fetchAndUpdateWeatherData();
    }
}

