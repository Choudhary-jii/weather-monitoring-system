//package com.weather.monitoring.weather_monitoring_system.controller;
//
//import com.weather.monitoring.weather_monitoring_system.model.DailyWeatherSummary;
//import com.weather.monitoring.weather_monitoring_system.model.LatestData;
//import com.weather.monitoring.weather_monitoring_system.model.WeatherDataEntity;
//import com.weather.monitoring.weather_monitoring_system.repository.DailyWeatherSummaryRepository;
//import com.weather.monitoring.weather_monitoring_system.service.LatestDataService;
//import com.weather.monitoring.weather_monitoring_system.service.WeatherService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.List;
//
//@RestController
//public class WeatherController {
//
//    @Autowired
//    protected WeatherService weatherService;
//
//    @Autowired
//    private LatestDataService latestDataService;
//
//    @Autowired
//    private DailyWeatherSummaryRepository dailyWeatherSummaryRepository;
//
//
//    @GetMapping("/weather_data/{city}")
//    public List<WeatherDataEntity> getAllWeatherData(@PathVariable String city) {
//        return weatherService.getAllWeatherData(city);
//    }
//
////    @PostMapping("/calculate_daily_summary/{city}")
////    public ResponseEntity<String> calculateDailySummary(@PathVariable String city) {
////        weatherService.getDailySummary(city);
////        return ResponseEntity.ok("Daily summary calculated for city: " + city);
////    }
//
//    @GetMapping("/{city}")
//    public LatestData getLatestWeather(@PathVariable String city) {
//        LatestData latestData = latestDataService.getLatestDataForCity(city);
//
//        if (latestData == null) {
//            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No data found for city: " + city);
//        }
//
//        return latestData; // Return the latest data
//    }
//
//
//    @GetMapping("/daily_summary/{city}")
//    public ResponseEntity<List<DailyWeatherSummary>> getDailySummary(@PathVariable String city) {
//        List<DailyWeatherSummary> summaries = dailyWeatherSummaryRepository.getSummariesByCity(city);
//
//        if (summaries != null && !summaries.isEmpty()) {
//            return ResponseEntity.ok(summaries); // Return the list of summaries
//        } else {
//            return ResponseEntity.noContent().build(); // Return 204 if no data
//        }
//    }
//
//}
//
package com.weather.monitoring.weather_monitoring_system.controller;

import com.weather.monitoring.weather_monitoring_system.model.DailyWeatherSummary;
import com.weather.monitoring.weather_monitoring_system.model.LatestData;
import com.weather.monitoring.weather_monitoring_system.model.WeatherDataEntity;
import com.weather.monitoring.weather_monitoring_system.service.LatestDataService;
import com.weather.monitoring.weather_monitoring_system.service.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class WeatherController {

    @Autowired
    protected WeatherService weatherService;

    @Autowired
    private LatestDataService latestDataService;

    @GetMapping("/weather_data/{city}")
    public List<WeatherDataEntity> getAllWeatherData(@PathVariable String city) {
        return weatherService.getAllWeatherData(city);
    }

    @GetMapping("/daily_summary/{city}")
    public ResponseEntity<DailyWeatherSummary> getDailySummary(@PathVariable String city) {
        DailyWeatherSummary summary = weatherService.getDailySummary(city);

        if (summary == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No summary found for city: " + city);
        }

        return ResponseEntity.ok(summary);
    }

    @GetMapping("/{city}")
    public LatestData getLatestWeather(@PathVariable String city) {
        LatestData latestData = latestDataService.getLatestDataForCity(city);

        if (latestData == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "No data found for city: " + city);
        }

        return latestData; // Return the latest data
    }

}