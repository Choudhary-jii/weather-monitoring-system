package com.weather.monitoring.weather_monitoring_system.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "latest_data")
public class LatestData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private double temp; // Temperature in Kelvin
    private double feelsLike;
    private int humidity;
    private double windSpeed;
    private String mainWeatherCondition;
    private long timestamp;
    @Column(name = "recorded_date")
    private LocalDate date;
}
