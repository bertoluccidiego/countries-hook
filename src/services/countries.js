import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1';

async function getOne(name) {
  const response = await axios.get(`${baseUrl}/name/${name}?fullText=true`);
  return response.data;
}

const exportObj = {
  getOne,
};

export default exportObj;
