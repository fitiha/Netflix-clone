import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

// instance.get("/movie/top_rated");

axios.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 401) {
    console.log(error)
  }
  return error;
});

export default instance; 