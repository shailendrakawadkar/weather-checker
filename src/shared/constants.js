// GEO DB
const GEO_API_KEY = "f585886cf8msha578dd6e3d0d6fep195d02jsn21a1a2b7772c";

export const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": GEO_API_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
//Open-Weather
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "19aa557a27472a32f72451b53c95ccdf";