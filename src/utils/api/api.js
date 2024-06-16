import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

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

  /* POST COMMENT */
  async postComment(id, payload) {
    const route = `/videos/${id}/comments`;
    try {
      const res = await this.api.post(route, payload)
      return res.data;
    } catch (e) {
      console.error(e);
    };
  };

};

const api = new Api(BASE_URL, API_KEY);

export default api;
