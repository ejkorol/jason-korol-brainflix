import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "60f458e4-0a5a-4961-ba43-73b0945485a8";

class Api {

  constructor (baseURL, apiKey) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.api = axios.create({
      baseURL: this.baseURL,
      params: {
        api_key: this.apiKey
      },
    });
  };

  /* GET VIDEO LIST */
  async getVideoList() {
    const route = "/videos";
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e)
    };
  };

  /* GET VIDEO BY ID */
  async getVideo(id) {
    const route = `/videos/${id}`;
    try {
      const res = await this.api.get(route);
      return res.data;
    } catch (e) {
      console.error(e);
    };
  };

};

const api = new Api(BASE_URL, API_KEY);

export default api;
