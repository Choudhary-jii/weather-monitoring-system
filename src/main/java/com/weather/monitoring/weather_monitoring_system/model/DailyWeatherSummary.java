package com.weather.monitoring.weather_monitoring_system.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "daily_weather_summary")
public class DailyWeatherSummary {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;

    @Column(name = "recorded_date")
    private LocalDate date;
    private double avgTemperature;
    private double maxTemperature;
    private double minTemperature;
    private String dominantWeatherCondition;

    public DailyWeatherSummary(String city, LocalDate date, double avgTemperature, double maxTemperature, double minTemperature, String dominantWeatherCondition) {
        this.city = city;
        this.date = date;
        this.avgTemperature = avgTemperature;
        this.maxTemperature = maxTemperature;
        this.minTemperature = minTemperature;
        this.dominantWeatherCondition = dominantWeatherCondition;
    }
}
