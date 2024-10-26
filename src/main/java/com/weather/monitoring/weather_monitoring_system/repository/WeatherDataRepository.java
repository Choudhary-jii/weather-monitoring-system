package com.weather.monitoring.weather_monitoring_system.repository;

import com.weather.monitoring.weather_monitoring_system.model.WeatherDataEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface WeatherDataRepository extends JpaRepository<WeatherDataEntity, Long> {

    WeatherDataEntity findTopByCityOrderByTimestampDesc(String city);

    List<WeatherDataEntity> findAllByCityAndDate(String city, LocalDate recordedDate);


    List<WeatherDataEntity> findAllByCity(String city);
}
