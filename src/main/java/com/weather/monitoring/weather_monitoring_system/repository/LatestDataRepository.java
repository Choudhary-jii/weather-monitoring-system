package com.weather.monitoring.weather_monitoring_system.repository;

import com.weather.monitoring.weather_monitoring_system.model.LatestData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LatestDataRepository extends JpaRepository<LatestData, Long> {
    LatestData findByCity(String city);
}
