package com.weather.monitoring.weather_monitoring_system.service;

import com.weather.monitoring.weather_monitoring_system.model.DailyWeatherSummary;
import com.weather.monitoring.weather_monitoring_system.model.LatestData;
import com.weather.monitoring.weather_monitoring_system.model.UserSettings;
import com.weather.monitoring.weather_monitoring_system.model.WeatherDataEntity;
import com.weather.monitoring.weather_monitoring_system.repository.DailyWeatherSummaryRepository;
import com.weather.monitoring.weather_monitoring_system.repository.LatestDataRepository;
import com.weather.monitoring.weather_monitoring_system.repository.WeatherDataRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class WeatherService {

    final private WeatherDataRepository weatherRepository;
    final private UserSettingsService userSettingsService;
    final private LatestDataRepository latestDataRepository;
    final private DailyWeatherSummaryRepository dailyWeatherSummaryRepository;
    final private EmailService emailService;

    @Value("${weather.api.url}")
    private String apiUrl;

    @Value("${weather.api.key}")
    private String apiKey;

    public WeatherService(WeatherDataRepository weatherRepository, UserSettingsService userSettingsService, LatestDataRepository latestDataRepository, DailyWeatherSummaryRepository dailyWeatherSummaryRepository, EmailService emailService) {
        this.weatherRepository = weatherRepository;
        this.userSettingsService = userSettingsService;
        this.latestDataRepository = latestDataRepository;
        this.dailyWeatherSummaryRepository = dailyWeatherSummaryRepository;
        this.emailService = emailService;
    }

    public List<WeatherDataEntity> getAllWeatherData(String city) {
        return weatherRepository.findAllByCity(city);
    }

    public WeatherDataEntity fetchWeatherData(String city, double lat, double lon) {
        String url = apiUrl + "?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class);

        // Parse the JSON response
        JSONObject jsonObject = new JSONObject(response);
        JSONObject main = jsonObject.getJSONObject("main");
        JSONObject wind = jsonObject.getJSONObject("wind");
        String mainWeatherCondition = jsonObject.getJSONArray("weather")
                .getJSONObject(0).getString("main");

        double tempInKelvin = main.getDouble("temp");
        double feelsLikeInKelvin = main.getDouble("feels_like");
        int humidity = main.getInt("humidity");
        double windSpeed = wind.getDouble("speed");

        // Convert temperature from Kelvin to Celsius
        double tempInCelsius = tempInKelvin - 273.15;
        double feelsLikeInCelsius = feelsLikeInKelvin - 273.15;

        // system time instead of API timestamp
        long timestamp = System.currentTimeMillis();

        // Create and set values for WeatherData object
        WeatherDataEntity weatherDataEntity = new WeatherDataEntity();
        weatherDataEntity.setCity(city);
        weatherDataEntity.setTemp(tempInCelsius);
        weatherDataEntity.setFeelsLike(feelsLikeInCelsius);
        weatherDataEntity.setHumidity(humidity);
        weatherDataEntity.setWindSpeed(windSpeed);
        weatherDataEntity.setMainWeatherCondition(mainWeatherCondition);
        weatherDataEntity.setTimestamp(timestamp); // Set to system time
        weatherDataEntity.setDate(LocalDate.now());

        // Saving data in the repository
        weatherRepository.save(weatherDataEntity);

        // Updating the latest_data table
        LatestData latestData = latestDataRepository.findByCity(city); // Finding existing data for the city
        if (latestData == null) {
            latestData = new LatestData(); // Creating a new instance if not found
        }
        // Setting the latest data fields
        latestData.setCity(city);
        latestData.setTemp(tempInCelsius);
        latestData.setFeelsLike(feelsLikeInCelsius);
        latestData.setHumidity(humidity);
        latestData.setWindSpeed(windSpeed);
        latestData.setMainWeatherCondition(mainWeatherCondition);
        latestData.setTimestamp(timestamp); // Using system time
        latestData.setDate(LocalDate.now());

        // Saving the latest data
        latestDataRepository.save(latestData);

        calculateDailySummary(city);

        return weatherDataEntity;
    }


    // method to fetch weather data for all cities
    public void fetchAndUpdateWeatherData() {

        // List of cities and their coordinates
        Map<String, double[]> cities = new HashMap<>();
        cities.put("Delhi", new double[]{28.6139, 77.2090});
        cities.put("Mumbai", new double[]{19.0760, 72.8777});
        cities.put("Chennai", new double[]{13.0827, 80.2707});
        cities.put("Bangalore", new double[]{12.9716, 77.5946});
        cities.put("Kolkata", new double[]{22.5726, 88.3639});
        cities.put("Hyderabad", new double[]{17.3850, 78.4867});

        for (Map.Entry<String, double[]> entry : cities.entrySet()) {
            String cityName = entry.getKey(); // Get the name of the city
            double[] coordinates = entry.getValue();

            // Fetch the current weather data for the city
            WeatherDataEntity currentWeatherData = fetchWeatherData(cityName, coordinates[0], coordinates[1]);

            // After fetching the data, check against user settings
            List<UserSettings> userSettingsList = userSettingsService.getAllUserSettings();

            // Check each user's settings against the current weather data
            for (UserSettings userSettings : userSettingsList) {
                 //Ensure that userSettings has a method getCity()
                if (userSettings.getCity().equalsIgnoreCase(cityName)) {
                    double threshold = userSettings.getTempThreshold();
                    String recipientEmail = userSettings.getEmail();

                     //Check if the current temperature exceeds the threshold
                    if (currentWeatherData.getTemp() > threshold) {
                        String subject = "Temperature Alert for " + cityName;
                        String message = "The current temperature in " + cityName + " is " + currentWeatherData.getTemp() +
                                "°C, which exceeds your set threshold of " + threshold + "°C.";
                        emailService.sendAlertEmail(subject, message, recipientEmail);
                    }
                }
            }

        }
    }

    // Fetching latest data for specific city
    public WeatherDataEntity getLatestWeatherDataForCity(String city) {
        return weatherRepository.findTopByCityOrderByTimestampDesc(city);
    }

    private void calculateDailySummary(String city) {
        LocalDate today = LocalDate.now();

        // Fetching today's weather data
        List<WeatherDataEntity> todayWeatherData = weatherRepository.findAllByCityAndDate(city, today);

        if (todayWeatherData.isEmpty()) {
            return; // No data to summarize
        }

        // Calculating aggregates
        double avgTemp = todayWeatherData.stream().mapToDouble(WeatherDataEntity::getTemp).average().orElse(0);
        double maxTemp = todayWeatherData.stream().mapToDouble(WeatherDataEntity::getTemp).max().orElse(0);
        double minTemp = todayWeatherData.stream().mapToDouble(WeatherDataEntity::getTemp).min().orElse(0);

        // Determining the dominant weather condition
        String dominantWeatherCondition = todayWeatherData.stream()
                .collect(Collectors.groupingBy(WeatherDataEntity::getMainWeatherCondition, Collectors.counting()))
                .entrySet()
                .stream()
                .max(Map.Entry.comparingByValue())
                .map(Map.Entry::getKey)
                .orElse("Unknown");

        // Creating a new summary object
        DailyWeatherSummary summary = new DailyWeatherSummary(city,today, avgTemp, maxTemp, minTemp, dominantWeatherCondition);

        // Checking if a summary already exists for today
        List<DailyWeatherSummary> existingSummaries = dailyWeatherSummaryRepository.findByCityAndDate(city, today);
        if (!existingSummaries.isEmpty()) {
            DailyWeatherSummary existingSummary = existingSummaries.get(0);
            // Update existing summary
            existingSummary.setAvgTemperature(avgTemp);
            existingSummary.setMaxTemperature(maxTemp);
            existingSummary.setMinTemperature(minTemp);
            existingSummary.setDominantWeatherCondition(dominantWeatherCondition);

            // Saving updated summary in the repository
            dailyWeatherSummaryRepository.save(existingSummary);
        } else {
            // Saving new summary
            dailyWeatherSummaryRepository.save(summary);
        }
    }

    public DailyWeatherSummary getDailySummary(String city) {
        LocalDate today = LocalDate.now();
        return dailyWeatherSummaryRepository.findByCityAndDate(city, today).stream().findFirst().orElse(null);
    }

}
