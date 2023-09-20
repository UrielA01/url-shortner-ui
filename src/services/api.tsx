import axios from 'axios';

const baseURL = 'http://localhost:8000'; 

const api = axios.create({
  baseURL,
});

export const fetchURL = async (urlID: string) => {
  try {
    const response = await api.get(`/url/${urlID}`);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postURL = async (originalURL: string) => {
  try {
    const response = await api.post(`/url`, {"url": originalURL});
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};