package com.weather.monitoring.weather_monitoring_system.controller;

import com.weather.monitoring.weather_monitoring_system.service.WeatherService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

public class WeatherControllerTest {

    @Mock
    private WeatherService weatherService;

    @InjectMocks
    private WeatherController weatherController;

    public WeatherControllerTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetWeatherDataThrowsException() {
        // Arrange
        String invalidCity = "invalid-city";
        when(weatherService.getLatestWeatherDataForCity(invalidCity)).thenThrow(new ResponseStatusException(HttpStatus.NOT_FOUND));

        // Act & Assert
        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class,
                () -> weatherController.weatherService.getLatestWeatherDataForCity(invalidCity)
        );

        assertEquals(HttpStatus.NOT_FOUND, exception.getStatusCode());
    }
}
