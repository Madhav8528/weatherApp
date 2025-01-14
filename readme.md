# WeatherApp 🌦️

**WeatherApp** is a Node.js-based backend application that fetches real-time weather details using the OpenWeatherMap API. Designed for simplicity and efficiency, the app enables users to retrieve accurate weather data by providing location information.  

This application was coded within **40 minutes**, showcasing a fast and effective implementation of API integration, making it a great learning resource for beginners looking to understand backend API handling.

##  Features
- Fetch weather details using city, state, and country.
- Seamless integration with OpenWeatherMap API.
- Utilizes the **axios** library for efficient HTTP requests.
- Implements a **custom APIError** class for structured error handling.
- Provides a reusable **API response** structure for consistent client communication.
- Incorporates an **asyncHandler** to manage asynchronous operations effectively.
- Modular and well-structured controller design.
- A quick and practical example of API integration.

##  How It Works
1. Provide location details in the request body.
2. The app dynamically constructs the API request URL.
3. Fetches real-time weather data from OpenWeatherMap and returns it to the client.

