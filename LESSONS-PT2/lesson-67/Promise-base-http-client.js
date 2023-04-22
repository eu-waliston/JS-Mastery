import axios from "axios";

// Promise base http client

const API_URL = "https://api.chucknorris.io/jokes/random";

// axios
//   .get(API_URL)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => console.log(err));

const fetchJoke = async (url) => {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (error) {}
};

fetchJoke(API_URL)




