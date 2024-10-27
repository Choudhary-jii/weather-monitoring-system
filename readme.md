Real-Time Weather Monitoring System
Overview

This project implements a real-time data processing system for weather monitoring, providing daily summaries and configurable alerts based on weather conditions. Data is sourced from the OpenWeatherMap API for key metropolitan areas in India, allowing for insights through rollups and aggregate calculations.

* Table of Contents :-

-> Project Structure

-> Features

-> Technologies Used

-> Setup and Installation

-> API Endpoints

-> Testing

-> Future Improvements




---



* Project Structure

The project follows the MVC (Model-View-Controller) architecture for scalability, maintainability, and testability, and includes:

 -> Model: Defines data models and database schema for storing weather data and daily summaries.

 -> View: Basic UI for visualizing weather summaries, trends, and alerts.

-> Controller: Manages API calls and data processing, handles alerts, and provides endpoints for frontend requests.

---

* Features

-> Real-Time Data Fetching: Configurable intervals for retrieving data from OpenWeatherMap API for Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad.

-> Data Aggregation and Summarization:

- Daily summaries: average, max, min temperatures, and dominant weather condition.
- User-configurable alert thresholds.

-> Temperature Conversion: Automatically converts temperatures from Kelvin to Celsius.

-> Alert System: Triggers alerts for custom temperature thresholds or specific weather conditions.

-> UI for Interacting: Interacting with API endpoints.

---

* Technologies Used

-> Java 21

-> Spring Boot - for application development

-> OpenWeatherMap API - for real-time weather data

-> MySQL - for persistent data storage

-> Thymeleaf - for frontend templating

-> Maven 3.9.9 - for build and dependency management




* Setup and Installation

-> Prerequisites

-  Java 17 or higher   
-  Maven (must be insalled for managing dependencies)
-  MySQL - set up a database for the application
-  OpenWeatherMap API Key - for accessing weather data(for this project my kew will work, but if doesn't try new key, and update it in application.properties file)
---
Instructions
Clone the repository:

- git clone https://github.com/Choudhary-jii/weather-monitoring-system


- Configure MySQL: In application.properties update your update your mysql username and password and after that make sure you make a database named "weatherdb", either update your database name in the application.property file(just find -'weatherdb', in application.properies file and replace it with your database name). 
Path of application.properties file is - src/main/resources/application.properties


- Add OpenWeatherMap API Key: if the current one doesn't works or valid (this step is not required)


- Run the application:

-> Build and Run the application:

-> bash command - mvn clean install
-> bash command - mvn spring-boot:run


* Access the application:

->  Open your browser and go to http://localhost:8080 to view the weather summaries and alerts.

-> API Endpoints
* GET - "/weather_data/{city}" 

* GET  -  "/daily_summary/{city}"
* GET - "/{city}"
* POST - "/save"


---
* Future Improvements

-> User Preferences for Conversion: Add Fahrenheit as an option in addition to Celsius.

-> Forecast Data Support: Expand the system to provide summaries based on forecast data.

-> Enhanced Alert Notifications: More informative and resource full email notifications for triggered alerts.


---

License
This project is open-source and available under the MIT License.