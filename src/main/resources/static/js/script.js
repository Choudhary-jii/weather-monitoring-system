//////document.getElementById("fetchWeatherBtn").addEventListener("click", function() {
//////    const citySelect = document.getElementById("city");
//////    const selectedCity = citySelect.value;
//////
//////    // Call the fetchWeather function when the button is clicked
//////    fetchWeather(selectedCity);
//////});
//////
//////function fetchWeather(city) {
//////    console.log(`Fetching weather for: ${city}`);
//////     const baseUrl = 'localhost:8080/daily_summary';
//////
//////    fetch(`${baseUrl}/${city}`)
//////        .then(response => {
//////            if (!response.ok) {
//////                throw new Error('Network response was not ok');
//////            }
//////            return response.json();
//////        })
//////        .then(data => {
//////            // Update the UI with fetched weather data
//////            document.getElementById('weatherCity').innerText = `City: ${data.city}`;
//////            document.getElementById('mainCondition').innerText = `Condition: ${data.mainWeatherCondition}`;
//////            document.getElementById('temperature').innerText = `Temperature: ${data.temp.toFixed(2)} °C`;
//////            document.getElementById('feelsLike').innerText = `Feels Like: ${data.feelsLike.toFixed(2)} °C`;
//////            document.getElementById('humidity').innerText = `Humidity: ${data.humidity} %`;
//////            document.getElementById('windSpeed').innerText = `Wind Speed: ${data.windSpeed.toFixed(2)} m/s`;
//////            // Corrected timestamp conversion from milliseconds to seconds
//////            document.getElementById('timestamp').innerText = `Last Updated: ${new Date(data.timestamp / 1000).toLocaleString()}`;
//////            document.getElementById('weatherDetails').style.display = 'block';
//////        })
//////        .catch(error => {
//////            console.error('Error fetching weather data:', error);
//////            alert('Failed to fetch weather data. Please try again later.');
//////        });
//////}
//////
//////document.getElementById('dailySummaryBtn').addEventListener('click', function() {
//////    const city = document.getElementById('city').value.trim();
//////    if (!city) {
//////        alert('Please select a city.');
//////        return;
//////    }
//////
//////fetch(`/daily_summary/${city}`)
//////    .then(response => {
//////        if (response.ok) {
//////            return response.json();
//////        } else if (response.status === 204) {
//////            // No content returned from the server
//////            console.log("No daily summary data available for the selected city.");
//////            return null;
//////        } else {
//////            throw new Error("Error fetching daily summary data");
//////        }
//////    })
//////    .then(data => {d
//////        if (data) {
//////            // Handle the response data
//////            console.log("Daily summary data:", data);
//////            // You can update your frontend with the summary data here
//////        }
//////    })
//////    .catch(error => {
//////        console.error("Error fetching daily summary:", error);
//////    });
////document.getElementById("fetchWeatherBtn").addEventListener("click", function() {
////    const citySelect = document.getElementById("city");
////    const selectedCity = citySelect.value;
////
////    // Call the fetchWeather function when the button is clicked
////    fetchWeather(selectedCity);
////});
////
////function fetchWeather(city) {
////    console.log(⁠ Fetching weather for: ${city} ⁠); // Log the selected city
////    const baseUrl = 'localhost:8080/weather_data'; // for weather data
////    fetch(⁠ ${baseUrl}/${city} ⁠)
////        .then(response => {
////            if (!response.ok) {
////                throw new Error('Network response was not ok');
////            }
////            return response.json();
////        })
////        .then(data => {
////            // Update the UI with fetched weather data
////            document.getElementById('weatherCity').innerText = ⁠ City: ${data.city} ⁠;
////            document.getElementById('mainCondition').innerText = ⁠ Condition: ${data.mainWeatherCondition} ⁠;
////            document.getElementById('temperature').innerText = ⁠ Temperature: ${data.temp.toFixed(2)} °C ⁠;
////            document.getElementById('feelsLike').innerText = ⁠ Feels Like: ${data.feelsLike.toFixed(2)} °C ⁠;
////            document.getElementById('humidity').innerText = ⁠ Humidity: ${data.humidity} % ⁠;
////            document.getElementById('windSpeed').innerText = ⁠ Wind Speed: ${data.windSpeed.toFixed(2)} m/s ⁠;
////            document.getElementById('weatherDetails').style.display = 'block';
////        })
////        .catch(error => {
////            console.error('Error fetching weather data:', error);
////            alert('Failed to fetch weather data. Please try again later.');
////        });
////}
////
////document.getElementById('dailySummaryBtn').addEventListener('click', function() {
////    const city = document.getElementById('city').value.trim();
////    if (!city) {
////        alert('Please select a city.');
////        return;
////    }
////
////const Url = 'localhost:8080/daily_summary'; // for daily summary data
////fetch(⁠ ${Url}/${city} ⁠)
////    .then(response => {
////        if (response.ok) {
////            return response.json();
////        } else if (response.status === 204) {
////            // No content returned from the server
////            console.log("No daily summary data available for the selected city.");
////            return null;
////        } else {
////            throw new Error("Error fetching daily summary data");
////        }
////    })
////    .then(data => {
////        if (data) {
////            // Handle the response data
////            console.log("Daily summary data:", data);
////            // You can update your frontend with the summary data here
////        }
////    })
////    .catch(error => {
////        console.error("Error fetching daily summary:", error);
////    });
////});
//
//
//
//
//
//
//
//
//<script>// JavaScript to handle fetching weather data and updating the UI
//      document
//        .getElementById("fetchWeatherBtn")
//        .addEventListener("click", function () {
//          const citySelect = document.getElementById("city");
//          const selectedCity = citySelect.value;
//
//          // Call the fetchWeather function when the button is clicked
//          fetchWeather(selectedCity);
//        });
//
//      function fetchWeather(city) {
//        console.log(`Fetching weather for: ${city}`); // Log the selected city
//        const baseUrl = "http://localhost:8080/"; // for weather data
//        fetch(`${baseUrl}${city}`)
//          .then((response) => {
//            if (!response.ok) {
//              throw new Error("Network response was not ok");
//            }
//            return response.json();
//          })
//          .then((data) => {
//            // Update the UI with fetched weather data
//            document.getElementById(
//              "weatherCity"
//            ).innerText = `City: ${data.city}`;
//            document.getElementById(
//              "mainCondition"
//            ).innerText = `Condition: ${data.mainWeatherCondition}`;
//            document.getElementById(
//              "temperature"
//            ).innerText = `Temperature: ${data.temp.toFixed(2)} °C`;
//            document.getElementById(
//              "feelsLike"
//            ).innerText = `Feels Like: ${data.feelsLike.toFixed(2)} °C`;
//            document.getElementById(
//              "humidity"
//            ).innerText = `Humidity: ${data.humidity} %`;
//            document.getElementById(
//              "windSpeed"
//            ).innerText = `Wind Speed: ${data.windSpeed.toFixed(2)} m/s`;
//            document.getElementById("weatherDetails").style.display = "block";
//          })
//          .catch((error) => {
//            console.error("Error fetching weather data:", error);
//            alert("Failed to fetch weather data. Please try again later.");
//          });
//      }
//
//          document.getElementById('saveSettingsBtn').addEventListener('click', function() {
//        const threshold = document.getElementById('tempThreshold').value;
//        const email = document.getElementById('userEmail').value.trim();
//        const city = document.getElementById('citySelect').value;
//
//        if (!email || !validateEmail(email)) {
//            alert('Please enter a valid email address.');
//            return;
//        }
//
//        const userSettings = {
//            tempThreshold: parseFloat(threshold),
//            email: email,
//            city: city
//        };
//
//        fetch('/settings/save', {
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(userSettings)
//        })
//        .then(response => {
//            if (!response.ok) {
//                throw new Error('Failed to save settings');
//            }
//            return response.text();
//        })
//        .then(message => {
//            document.getElementById('alertMessage').innerText = message;
//            document.getElementById('alertMessage').style.display = 'block';
//        })
//        .catch(error => {
//            console.error('Error saving settings:', error);
//            document.getElementById('alertMessage').innerText = 'Error saving settings. Please try again.';
//            document.getElementById('alertMessage').style.display = 'block';
//        });
//    });
//
//      document
//        .getElementById("dailySummaryBtn")
//        .addEventListener("click", function () {
//          const city = document.getElementById("city").value.trim();
//          if (!city) {
//            alert("Please select a city.");
//            return;
//          }
//
//          const Url = "http://localhost:8080/daily_summary/"; // for daily summary data
//          fetch(`${Url}${city}`)
//            .then((response) => {
//              if (response.ok) {
//                return response.json();
//              } else if (response.status === 204) {
//                // No content returned from the server
//                console.log(
//                  "No daily summary data available for the selected city."
//                );
//                return null;
//              } else {
//                throw new Error("Error fetching daily summary data");
//              }
//            })
//           .then((data) => {
//            if (data) {
//                // Clear previous data
//                document.getElementById("summaryCityName").innerText = '';
//                document.getElementById("avgTemperature").innerText = '';
//                document.getElementById("maxTemperature").innerText = '';
//                document.getElementById("minTemperature").innerText = '';
//                document.getElementById("dominantCondition").innerText = '';
//
//                // Update the UI with new data
//                document.getElementById("summaryCityName").innerText = city;
//                document.getElementById("avgTemperature").innerText = data.avgTemperature.toFixed(2);
//                document.getElementById("maxTemperature").innerText = data.maxTemperature.toFixed(2);
//                document.getElementById("minTemperature").innerText = data.minTemperature.toFixed(2);
//                document.getElementById("dominantCondition").innerText = data.dominantCondition;
//                document.getElementById("summaryResults").style.display = "block";
//            }
//        })
//            .catch((error) => {
//              console.error("Error fetching daily summary:", error);
//              document.getElementById("alertMessage").innerText =
//                "Error fetching daily summary. Please try again.";
//              document.getElementById("alertMessage").style.display = "block";
//            });
//
//
//
//
//<!--            .then((data) => {-->
//<!--              if (data) {-->
//<!--                // Handle the response data-->
//<!--                console.log("Daily summary data:", data);-->
//<!--                // You can update your frontend with the summary data here-->
//<!--              }-->
//<!--            })-->
//<!--            .catch((error) => {-->
//<!--              console.error("Error fetching daily summary:", error);-->
//<!--            });-->
//        });
//
//        function validateEmail(email) {
//        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//        return re.test(String(email).toLowerCase());
//    }
//</script>