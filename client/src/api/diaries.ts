import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

export async function getDairies(username: string) {
  const { data } = await api.get(`diaries?username=${username}`, {
    headers: getHeaders(),
  });
  return data;
}

function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
  };
}
