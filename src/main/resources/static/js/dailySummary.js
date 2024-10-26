////////document.addEventListener("DOMContentLoaded", function() {
////////    const city = new URLSearchParams(window.location.search).get('city'); // Get the city from query params
////////    document.getElementById('cityName').innerText = city; // Set the city name
////////
////////    fetch(`/daily-summary/${city}`)
////////        .then(response => response.json())
////////        .then(data => {
////////            if (data.length > 0) {
////////                const summary = data[0]; // Assuming you're fetching today's summary
////////                document.getElementById('avgTemp').innerText = `${summary.avgTemperature.toFixed(2)} °C`;
////////                document.getElementById('maxTemp').innerText = `${summary.maxTemperature.toFixed(2)} °C`;
////////                document.getElementById('minTemp').innerText = `${summary.minTemperature.toFixed(2)} °C`;
////////                document.getElementById('dominantCondition').innerText = summary.dominantWeatherCondition;
////////
////////                // Plot Weather Trends
////////                plotWeatherTrends(data);
////////
////////                // Plot Alerts (Assume you have an API to fetch alert counts, adapt if needed)
////////                plotTriggeredAlerts();
////////            }
////////        })
////////        .catch(error => {
////////            console.error("Error fetching daily summary data:", error);
////////            alert("Error fetching daily summary. Please try again later.");
////////        });
////////});
////////
////////function plotWeatherTrends(data) {
////////    const labels = data.map(item => item.date);
////////    const avgTemps = data.map(item => item.avgTemperature);
////////    const maxTemps = data.map(item => item.maxTemperature);
////////    const minTemps = data.map(item => item.minTemperature);
////////
////////    const ctx = document.getElementById('weatherTrendChart').getContext('2d');
////////    new Chart(ctx, {
////////        type: 'line',
////////        data: {
////////            labels: labels,
////////            datasets: [
////////                {
////////                    label: 'Average Temperature (°C)',
////////                    data: avgTemps,
////////                    borderColor: 'rgba(75, 192, 192, 1)',
////////                    fill: false
////////                },
////////                {
////////                    label: 'Max Temperature (°C)',
////////                    data: maxTemps,
////////                    borderColor: 'rgba(255, 99, 132, 1)',
////////                    fill: false
////////                },
////////                {
////////                    label: 'Min Temperature (°C)',
////////                    data: minTemps,
////////                    borderColor: 'rgba(54, 162, 235, 1)',
////////                    fill: false
////////                }
////////            ]
////////        }
////////    });
////////}
////////
////////function plotTriggeredAlerts() {
////////    const ctx = document.getElementById('alertsChart').getContext('2d');
////////    new Chart(ctx, {
////////        type: 'bar',
////////        data: {
////////            labels: ['Threshold Breach 1', 'Threshold Breach 2', 'Threshold Breach 3'], // Example labels
////////            datasets: [
////////                {
////////                    label: 'Alerts',
////////                    data: [5, 3, 2], // Example data
////////                    backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
////////                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
////////                    borderWidth: 1
////////                }
////////            ]
////////        }
////////    });
////////}
//////
//////
//////
//////    // Fetch the daily summary data for the selected city
////////    fetch(`/daily-summary/${city}`)
////////        .then(response => response.json()) // Convert response to JSON
////////        .then(data => {
////////            if (data.length > 0) {
////////                const summary = data[0]; // Assuming you're fetching today's summary
////////                document.getElementById('avgTemp').innerText = `${summary.avgTemperature.toFixed(2)} °C`;
////////                document.getElementById('maxTemp').innerText = `${summary.maxTemperature.toFixed(2)} °C`;
////////                document.getElementById('minTemp').innerText = `${summary.minTemperature.toFixed(2)} °C`;
////////                document.getElementById('dominantCondition').innerText = summary.dominantWeatherCondition;
////////
////////                // Optionally, plot weather trends using the data
////////                plotWeatherTrends(data); // Function for displaying trends using Chart.js
////////
////////                // Optionally, plot alerts based on triggered alert data
////////                plotTriggeredAlerts(city); // Pass city to dynamically fetch alerts
////////            } else {
////////                // Handle the case when no data is available
////////                alert('No data available for the selected city.');
////////                document.getElementById('avgTemp').innerText = 'N/A';
////////                document.getElementById('maxTemp').innerText = 'N/A';
////////                document.getElementById('minTemp').innerText = 'N/A';
////////                document.getElementById('dominantCondition').innerText = 'No Data Available';
////////            }
////////        })
////////        .catch(error => {
////////            console.error("Error fetching daily summary data:", error);
////////            alert("Error fetching daily summary. Please try again later.");
////////        });
////////});
//////
//////
////////// Fetch the daily summary data for the selected city
////////fetch(`/daily_summary?city=${city}`)
////////    .then(response => response.json()) // Convert response to JSON
////////    .then(data => {
////////        if (data.length > 0) {
////////            const summary = data[0]; // Assuming you're fetching today's summary
////////            document.getElementById('avgTemp').innerText = `${summary.avgTemperature.toFixed(2)} °C`;
////////            document.getElementById('maxTemp').innerText = `${summary.maxTemperature.toFixed(2)} °C`;
////////            document.getElementById('minTemp').innerText = `${summary.minTemperature.toFixed(2)} °C`;
////////            document.getElementById('dominantCondition').innerText = summary.dominantWeatherCondition;
////////
////////            // Optionally, plot weather trends using the data
////////            plotWeatherTrends(data); // Function for displaying trends using Chart.js
////////
////////            // Optionally, plot alerts based on triggered alert data
////////            plotTriggeredAlerts(city); // Pass city to dynamically fetch alerts
////////        } else {
////////            // Handle the case when no data is available
////////            alert('No data available for the selected city.');
////////            document.getElementById('avgTemp').innerText = 'N/A';
////////            document.getElementById('maxTemp').innerText = 'N/A';
////////            document.getElementById('minTemp').innerText = 'N/A';
////////            document.getElementById('dominantCondition').innerText = 'No Data Available';
////////        }
////////    })
////////    .catch(error => {
////////        console.error("Error fetching daily summary data:", error);
////////        alert("Error fetching daily summary. Please try again later.");
////////    });
//////
////////fetch(`/daily_summary?city=${city}`)
////////    .then(response => {
////////        if (!response.ok) {
////////            throw new Error('Failed to fetch daily summary');
////////        }
////////        return response.json();
////////    })
////////    .then(data => {
////////        // Use a chart library to visualize the data
////////        console.log(data);
////////    })
////////    .catch(error => {
////////        console.error('Error fetching daily summary:', error);
////////        alert('Failed to fetch daily summary. Please try again later.');
////////    });
//////
//////
//////document.addEventListener("DOMContentLoaded", function() {
//////    const city = new URLSearchParams(window.location.search).get('city'); // Get the city from query params
//////    document.getElementById('cityName').innerText = city; // Set the city name
//////
//////// dailySummary.js
////////onst city = "Mumbai"; // Replace this with the dynamic city as needed
//////
//////fetch(`/daily_summary?city=${city}`)
//////    .then(response => {
//////        if (response.ok) {
//////            return response.json();
//////        } else if (response.status === 204) {
//////            console.log("No daily summary data available for this city.");
//////            return null;
//////        } else {
//////            throw new Error("Error fetching daily summary data");
//////        }
//////    })
//////    .then(data => {
//////        if (data) {
//////            // Process and display the daily summary data
//////            console.log("Daily summary data:", data);
//////        }
//////    })
//////    .catch(error => {
//////        console.error("Error fetching daily summary:", error);
//////    });
//////
//////
//////
//////// Function to plot weather trends using Chart.js
//////function plotWeatherTrends(data) {
//////    const labels = data.map(item => item.date); // Extract dates
//////    const avgTemps = data.map(item => item.avgTemperature); // Average temperatures
//////    const maxTemps = data.map(item => item.maxTemperature); // Max temperatures
//////    const minTemps = data.map(item => item.minTemperature); // Min temperatures
//////
//////    const ctx = document.getElementById('weatherTrendChart').getContext('2d');
//////    new Chart(ctx, {
//////        type: 'line',
//////        data: {
//////            labels: labels, // Dates
//////            datasets: [
//////                {
//////                    label: 'Average Temperature (°C)',
//////                    data: avgTemps,
//////                    borderColor: 'rgba(75, 192, 192, 1)',
//////                    fill: false
//////                },
//////                {
//////                    label: 'Max Temperature (°C)',
//////                    data: maxTemps,
//////                    borderColor: 'rgba(255, 99, 132, 1)',
//////                    fill: false
//////                },
//////                {
//////                    label: 'Min Temperature (°C)',
//////                    data: minTemps,
//////                    borderColor: 'rgba(54, 162, 235, 1)',
//////                    fill: false
//////                }
//////            ]
//////        }
//////    });
//////}
//////
//////// Function to plot alerts, using an API call to get alert data dynamically
//////function plotTriggeredAlerts(city) {
//////    fetch(`/alert-summary/${city}`) // Fetch alert data based on city
//////        .then(response => response.json())
//////        .then(alertData => {
//////            const labels = alertData.map(alert => alert.type); // Alert types
//////            const alertCounts = alertData.map(alert => alert.count); // Alert counts
//////
//////            const ctx = document.getElementById('alertsChart').getContext('2d');
//////            new Chart(ctx, {
//////                type: 'bar',
//////                data: {
//////                    labels: labels, // Types of alerts
//////                    datasets: [{
//////                        label: 'Alerts',
//////                        data: alertCounts, // Number of alerts per type
//////                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
//////                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
//////                        borderWidth: 1
//////                    }]
//////                }
//////            });
//////        })
//////        .catch(error => {
//////            console.error('Error fetching alert data:', error);
//////            alert('Error fetching alert data.');
//////        });
//////}
////document.addEventListener("DOMContentLoaded", function() {
////    const city = new URLSearchParams(window.location.search).get('city'); // Get the city from query params
////    document.getElementById('cityName').innerText = city; // Set the city name dynamically
////
////    // Fetch the daily weather summary for the selected city
////    fetch(`/daily_summary?city=${city}`)
////        .then(response => {
////            if (response.ok) {
////                return response.json(); // Parse the JSON response if successful
////            } else if (response.status === 204) {
////                console.log("No daily summary data available for this city.");
////                displayNoDataMessage(city); // Show a message if no data is available
////                return null;
////            } else {
////                throw new Error("Error fetching daily summary data");
////            }
////        })
////        .then(data => {
////            if (data) {
////                // Process and display the daily summary data
////                console.log("Daily summary data:", data);
////                displaySummaryData(data); // Call the function to display data on the page
////                plotWeatherTrends(data.weatherTrends); // Assuming the data contains a weatherTrends array for plotting
////            }
////        })
////        .catch(error => {
////            console.error("Error fetching daily summary:", error);
////            displayErrorMessage(error); // Handle any fetch errors and show an error message
////        });
////
////    // Function to dynamically display summary data on the frontend
////    function displaySummaryData(data) {
////        const summaryContainer = document.getElementById("summary-container");
////        summaryContainer.innerHTML = ""; // Clear previous data if any
////
////        let content = `<h2>Daily Weather Summary for ${city}</h2>`;
////        content += `<p><strong>Average Temperature:</strong> ${data.avgTemperature.toFixed(2)} °C</p>`;
////        content += `<p><strong>Maximum Temperature:</strong> ${data.maxTemperature.toFixed(2)} °C</p>`;
////        content += `<p><strong>Minimum Temperature:</strong> ${data.minTemperature.toFixed(2)} °C</p>`;
////        content += `<p><strong>Dominant Weather Condition:</strong> ${data.dominantWeatherCondition}</p>`;
////        summaryContainer.innerHTML = content;
////    }
////
////    // Function to display a message when no data is available
////    function displayNoDataMessage(city) {
////        const summaryContainer = document.getElementById("summary-container");
////        summaryContainer.innerHTML = `<p>No daily summary data available for ${city}.</p>`;
////    }
////
////    // Function to display an error message if fetching fails
////    function displayErrorMessage(error) {
////        const summaryContainer = document.getElementById("summary-container");
////        summaryContainer.innerHTML = `<p>Failed to fetch daily summary data: ${error.message}</p>`;
////    }
////
////    // Function to plot weather trends using Chart.js
////    function plotWeatherTrends(data) {
////        const labels = data.map(item => item.date); // Extract dates
////        const avgTemps = data.map(item => item.avgTemperature); // Average temperatures
////        const maxTemps = data.map(item => item.maxTemperature); // Max temperatures
////        const minTemps = data.map(item => item.minTemperature); // Min temperatures
////
////        const ctx = document.getElementById('weatherTrendChart').getContext('2d');
////        new Chart(ctx, {
////            type: 'line',
////            data: {
////                labels: labels, // Dates
////                datasets: [
////                    {
////                        label: 'Average Temperature (°C)',
////                        data: avgTemps,
////                        borderColor: 'rgba(75, 192, 192, 1)',
////                        fill: false
////                    },
////                    {
////                        label: 'Max Temperature (°C)',
////                        data: maxTemps,
////                        borderColor: 'rgba(255, 99, 132, 1)',
////                        fill: false
////                    },
////                    {
////                        label: 'Min Temperature (°C)',
////                        data: minTemps,
////                        borderColor: 'rgba(54, 162, 235, 1)',
////                        fill: false
////                    }
////                ]
////            }
////        });
////    }
////
////    // Function to plot alerts using an API call to get alert data dynamically
////    plotTriggeredAlerts(city);
////});
////
////// Function to plot alerts, using an API call to get alert data dynamically
////function plotTriggeredAlerts(city) {
////    fetch(`/alert-summary/${city}`) // Fetch alert data based on city
////        .then(response => response.json())
////        .then(alertData => {
////            const labels = alertData.map(alert => alert.type); // Alert types
////            const alertCounts = alertData.map(alert => alert.count); // Alert counts
////
////            const ctx = document.getElementById('alertsChart').getContext('2d');
////            new Chart(ctx, {
////                type: 'bar',
////                data: {
////                    labels: labels, // Types of alerts
////                    datasets: [{
////                        label: 'Alerts',
////                        data: alertCounts, // Number of alerts per type
////                        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
////                        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
////                        borderWidth: 1
////                    }]
////                }
////            });
////        })
////        .catch(error => {
////            console.error('Error fetching alert data:', error);
////            alert('Error fetching alert data.');
////        });
////}
//document.addEventListener("DOMContentLoaded", function() {
//    const city = new URLSearchParams(window.location.search).get('city'); // Get the city from query params
//    document.getElementById('cityName').innerText = city; // Set the city name dynamically
//
//    // Fetch the daily weather summary for the selected city
//    fetch(`/daily_summary?city=${city}`)
//        .then(response => {
//            if (response.ok) {
//                return response.json(); // Parse the JSON response if successful
//            } else if (response.status === 204) {
//                console.log("No daily summary data available for this city.");
//                displayNoDataMessage(city); // Show a message if no data is available
//                return null;
//            } else {
//                throw new Error("Error fetching daily summary data");
//            }
//        })
//        .then(data => {
//            if (data) {
//                // Process and display the daily summary data
//                console.log("Daily summary data:", data);
//                displaySummaryData(data); // Call the function to display data on the page
//                plotWeatherTrends(data.weatherTrends); // Assuming the data contains a weatherTrends array for plotting
//            }
//        })
//        .catch(error => {
//            console.error("Error fetching daily summary:", error);
//            displayErrorMessage(error); // Handle any fetch errors and show an error message
//        });
//
//    // Function to dynamically display summary data on the frontend
//    function displaySummaryData(data) {im
//        const summaryContainer = document.getElementById("summary-container");
//        summaryContainer.innerHTML = ""; // Clear previous data if any
//
//        let content = `<h2>Daily Weather Summary for ${city}</h2>`;
//        content += `<p><strong>Average Temperature:</strong> ${data.avgTemperature.toFixed(2)} °C</p>`;
//        content += `<p><strong>Maximum Temperature:</strong> ${data.maxTemperature.toFixed(2)} °C</p>`;
//        content += `<p><strong>Minimum Temperature:</strong> ${data.minTemperature.toFixed(2)} °C</p>`;
//        content += `<p><strong>Dominant Weather Condition:</strong> ${data.dominantWeatherCondition}</p>`;
//        summaryContainer.innerHTML = content;
//    }
//
//    // Function to display a message when no data is available
//    function displayNoDataMessage(city) {
//        const summaryContainer = document.getElementById("summary-container");
//        summaryContainer.innerHTML = `<p>No daily summary data available for ${city}.</p>`;
//    }
//
//    // Function to display an error message if fetching fails
//    function displayErrorMessage(error) {
//        const summaryContainer = document.getElementById("summary-container");
//        summaryContainer.innerHTML = `<p>Failed to fetch daily summary data: ${error.message}</p>`;
//    }
//
//    // Function to plot weather trends using Chart.js
//    function plotWeatherTrends(data) {
//        const labels = data.map(item => item.date); // Extract dates
//        const avgTemps = data.map(item => item.avgTemperature); // Average temperatures
//        const maxTemps = data.map(item => item.maxTemperature); // Max temperatures
//        const minTemps = data.map(item => item.minTemperature); // Min temperatures
//
//        const ctx = document.getElementById('weatherTrendChart').getContext('2d');
//        new Chart(ctx, {
//            type: 'line',
//            data: {
//                labels: labels, // Dates
//                datasets: [
//                    {
//                        label: 'Average Temperature (°C)',
//                        data: avgTemps,
//                        borderColor: 'rgba(75, 192, 192, 1)',
//                        fill: false
//                    },
//                    {
//                        label: 'Max Temperature (°C)',
//                        data: maxTemps,
//                        borderColor: 'rgba(255, 99, 132, 1)',
//                        fill: false
//                    },
//                    {
//                        label: 'Min Temperature (°C)',
//                        data: minTemps,
//                        borderColor: 'rgba(54, 162, 235, 1)',
//                        fill: false
//                    }
//                ]
//            }
//        });
//    }
//});
