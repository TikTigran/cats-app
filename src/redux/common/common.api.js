import axios from "axios";

const api = {
  getCategories() {
    return axios.get("https://api.thecatapi.com/v1/categories");
  },
  getCatsData() {
    return axios.get(
      "https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1"
    );
  },
};

export default api;
