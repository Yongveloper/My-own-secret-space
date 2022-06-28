import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

interface IUser {
  email: string;
  token: string;
  username: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ISignupData {
  username: string;
  email: string;
  password: string;
}

export async function postLogin(data: ILoginData): Promise<IUser> {
  const response = await api.post(`http://localhost:8080/auth/login`, data);
  return response.data;
}

export async function postSignup(data: ISignupData): Promise<IUser> {
  const response = await api.post(`http://localhost:8080/auth/signup`, data);
  return response.data;
}
