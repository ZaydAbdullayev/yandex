import axios from "axios";

const base_url = "https://yandex.sp-school58.uz";

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const ApiService = {
  async fetching(url, data) {
    const response = await axios.post(`${base_url}/${url}`, data, config);
    return response;
  },
};

export const ApiGetService = {
  async fetching(url) {
    const response = await axios.get(`${base_url}/${url}`);
    return response;
  },
};
