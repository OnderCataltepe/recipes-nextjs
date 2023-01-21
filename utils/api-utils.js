import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const getPopular = async () => {
  const response = await instance.get(
    `random?number=100&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return response.data;
};

export const getCategory = async (url) => {
  const response = await instance.get(
    `random?number=100&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&tags=${url}`
  );
  return response.data;
};

export const getRecipe = async (id) => {
  const response = await instance.get(
    `${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return response;
};

export const getSearch = async (url) => {
  const response = await instance.get(
    `complexSearch?number=100&apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${url}`
  );

  return response.data;
};
