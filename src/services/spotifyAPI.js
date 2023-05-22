import axios from "axios";

// Spotify
const CLIENT_ID = "b4f0f96a82f34969bdafe678aefecffb";
const CLIENT_SECRET = "2153f790239d40de971476cc3f35a8e9";

const getAccessToken = async () => {
  try {
    const authOptions = {
      method: "post",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
      data: "grant_type=client_credentials",
      responseType: "json",
    };

    const response = await axios(authOptions);

    if (response.status === 200) {
      const { access_token } = response.data;
      return access_token;
    }
  } catch (error) {
    console.error("Error retrieving access token:", error);
  }
};

const getNewReleases = async () => {
  try {
    const token = await getAccessToken();
    const requestOptions = {
      method: "get",
      url: "https://api.spotify.com/v1/browse/new-releases",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
      responseType: "json",
    };

    const response = await axios(requestOptions);
    const newAlbums = response.data.albums.items;
    return newAlbums;
  } catch (error) {
    console.error("Error retrieving albums:", error.message);
  }
};
export default { getNewReleases };
