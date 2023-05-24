import axios from "axios";
import variables from "./variables.js";

// News
const API_KEY = variables.NEWS_API_KEY;
const URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

const getNews = (country, category) => {
  const modifiedURL = `${URL}&country=${country}&category=${category}`;
  const request = axios.get(modifiedURL);
  return request.then((response) => response.data);
};

export default { getNews };
