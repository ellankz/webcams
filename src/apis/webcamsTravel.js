import axios from "axios";

export default axios.create({
  baseURL: "https://api.windy.com/api/webcams/v2/",
  // baseURL: 'https://webcamstravel.p.rapidapi.com',

  headers: {
    // "x-rapidapi-host": 'webcamstravel.p.rapidapi.com',
    "x-windy-key": "sR2JMrK2elMFefOxSAj0GgsQMjsPOfr2",
    "content-type": "application/octet-stream"
  }
});
