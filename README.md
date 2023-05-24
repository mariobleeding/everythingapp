# everythingapp

This is my personal client for consuming content. It is built using JavaScript and ReactJS. The app utilizes Axios for handling HTTP requests and Tailwind CSS for styling.

## Instructions

To run the app locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/everythingapp.git
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Put your credentials:
   Create a file called `/services/variables.js` and put your credentiales following this format

   ```js
   const variables = {
     REDDIT_CLIENT_ID: "<your-reddit-client-id>",
     REDDIT_CLIENT_SECRET: "<your-reddit-client-secret>",
     REDDIT_USERNAME: "<your-reddit-username>",
     REDDIT_PASSWORD: "<your-reddit-password>",
     NEWS_API_KEY: "<your-news-api-key>",
     SPOTIFY_CLIENT_ID: "<your-spotify-client-id>",
     SPOTIFY_CLIENT_SECRET: "<your-spotify-client-secret>",
   };

   export default variables;
   ```

## Features

1. **Spotify New Releases**: Browse and discover the latest music releases on Spotify.
2. **Reddit Hot Posts and Search**: Stay updated with popular Reddit posts and search for specific subreddits.
3. **News**: Access news articles from various countries.

## Discord PR

If you would like to collaborate or have any suggestions, feel free to contact me on Discord: @mariobleeding#9404
