import axios from "axios";
import variables from "./variables.js";

const getClientCredentials = () => {
  const clientId = variables.REDDIT_CLIENT_ID;
  const clientSecret = variables.REDDIT_CLIENT_SECRET;
  const authString = btoa(`${clientId}:${clientSecret}`);
  return authString;
};

const getToken = async () => {
  try {
    const authString = getClientCredentials();
    const username = variables.REDDIT_USERNAME;
    const password = variables.REDDIT_PASSWORD;

    const response = await axios.post(
      "https://www.reddit.com/api/v1/access_token",
      "grant_type=password&username=" +
        encodeURIComponent(username) +
        "&password=" +
        encodeURIComponent(password),
      {
        headers: {
          Authorization: `Basic ${authString}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.error("Error getting access token:", error);
    throw error;
  }
};

const getPostsFromSubreddit = async (subreddit) => {
  try {
    const accessToken = await getToken();
    const url = `https://oauth.reddit.com/r/${subreddit}/hot`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const posts = response.data.data.children.map((post) => post.data);
    return posts;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Subreddit not found");
      return []; // Return an empty array or any other default value
    } else {
      console.error("Error fetching posts:", error);
      throw error;
    }
  }
};

export default { getPostsFromSubreddit };
