import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import axios from "axios";


const getWeather = asyncHandler( async (req, res) => {
    
    const { location } = req.body

    if(!location){
        throw new ApiError(400, "Please enter the location for weather forecasting")
    }

    let api = "http://api.openweathermap.org/geo/1.0/direct?q="
    let cityName = location + "&limit="
    let limit = 1 + "&appid="
    let appid = process.env.API_ID
    let apiUrl = api + cityName + limit + appid

    if(!apiUrl){
        throw new ApiError(400, "Something went wrong while designing api url")
    }
    let latitude
    let longitude
    await axios.get(apiUrl)
    .then((response) => {
              latitude = response.data[0].lat
              longitude = response.data[0].lon
    }).catch(() => {
        throw new ApiError(500, "Something went wrong while getting location coordinates")
    })
    
    const initialApi = "https://api.openweathermap.org/data/2.5/weather?lat="
    const lat = latitude + "&lon="
    const lon = longitude + "&appid="
    const apiId = process.env.API_ID
    const weatherApi = initialApi + lat + lon + apiId

    if(!weatherApi){
        throw new ApiError(400, "Something went wrong while designing weather api url")
    }
    let data
    await axios.get(weatherApi)
    .then((response) => {
        data = response.data
    }).catch(() => 
        { throw new ApiError(500, "Something went wrong while fetching whether data")
    })
    return res.status(200)
        .json( new ApiResponse(200, data, "Weather data fetched successfully"))
    
})


export { getWeather }