import axios from 'axios';

export interface IDiaryData {
  title: string;
  mood: string;
  text: string;
  imageUrl: string;
}

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

export async function getDairies(username: string) {
  const { data } = await api.get(`diaries?username=${username}`, {
    headers: getHeaders(),
  });
  return data;
}

export async function getDiaryDetail(id: string) {
  const { data } = await api.get(`diaries/${id}`, {
    headers: getHeaders(),
  });
  return data;
}

export async function postCreateDiary(diary: IDiaryData) {
  const newDairy = {
    ...diary,
    imageUrl: '',
  }; // todo fix to ImageUrl and File
  await api.post('diaries', newDairy, {
    headers: getHeaders(),
  });
}

function getHeaders() {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`,
  };
}
