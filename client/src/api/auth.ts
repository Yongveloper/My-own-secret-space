import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/auth/',
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

export async function postLogin(info: ILoginData): Promise<IUser> {
  const { data } = await api.post(`login`, info);
  return data;
}

export async function postSignup(info: ISignupData): Promise<IUser> {
  const { data } = await api.post(`signup`, info);
  return data;
}
