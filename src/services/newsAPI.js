import axios from "axios";

// News
const API_KEY = "05883aa50dbc48dc8ad85ea233cbdc83";
const URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`;

const getNews = (country, category) => {
  const modifiedURL = `${URL}&country=${country}&category=${category}`;
  const request = axios.get(modifiedURL);
  console.log(modifiedURL);
  return request.then((response) => response.data);
};

export default { getNews };
