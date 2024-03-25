import axios from "axios";

// Function to fetch data from a URL
const BASE_URL = "https://api.jikan.moe/v4";
const axiosInstance = axios.create({ baseURL: BASE_URL });
const BASE_URLs = import.meta.env.VITE_BASE_URL;

const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const fetchData = async (url) => {
  return await axiosInstance.get("/projects?_page=1&limit=3").data;
};

// Example usage:

export const addPost = async (post) => {
  return await axiosInstance.post("/todos", post);
};

export const deleteTodo = async (id) => {
  return await axiosInstance.delete(`/todos/${id}`);
};

export const getRecentAnimeRecommendations = async () => {
  try {
    const response = await fetch(`${BASE_URLs}/top/anime?limit=20`); // Fetch data asynchronously
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json(); // Parse response as JSON
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
export const getRandomAnime = async () => {
  try {
    const response = await fetch(`${BASE_URLs}/random/anime`); // Fetch data asynchronously
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json(); // Parse response as JSON
    return data; // Return the fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for the caller to handle
  }
};
