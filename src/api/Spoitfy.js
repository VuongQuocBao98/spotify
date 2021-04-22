import * as configs from "../constants/Config";
import queryString from "query-string";
import Axios from "axios";

class Artist {
  params = {
    limit: 4,
    offset: 0,
  };

  queryFetch = async (query) => {
    try {
      const queryParams = queryString.stringify(this.params);
      let config = {
        headers: {
          Authorization: "Bearer " + configs.API_KEY,
        },
      };
      const url = `${configs.BASE_URL}search?q=${query}&type=artist&${queryParams}`;

      const response = await Axios.get(url, config);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  queryArtistInfo = async (query) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + configs.API_KEY,
        },
      };
      const url = `${configs.BASE_URL}artists/${query}`;
      const response = await Axios.get(url, config);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  queryAlbums = async (query) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + configs.API_KEY,
        },
      };
      const url = `${configs.BASE_URL}artists/${query}/albums?limit=8&offset=0`;
      const response = await Axios.get(url, config);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  queryAlbumInfo = async (query) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + configs.API_KEY,
        },
      };
      const url = `https://api.spotify.com/v1/albums/${query}`;
      const response = await Axios.get(url, config);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  queryAlbumTrack = async (query) => {
    try {
      let config = {
        headers: {
          Authorization: "Bearer " + configs.API_KEY,
        },
      };
      const url = `https://api.spotify.com/v1/albums/${query}/tracks?limit=4&offset=0`;
      const response = await Axios.get(url, config);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

const artist = new Artist();

export default artist;
