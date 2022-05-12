import { AxiosResponse } from 'axios';
import apiService from '../../../service/apiService';

type LoginDataResponse = {
  result: boolean;
  token?: string;
};

type LoginDataRequest = {
  email: string;
  password: string;
};

async function login(creds: LoginDataRequest): Promise<LoginDataResponse> {
  try {
    const { data }: AxiosResponse<LoginDataResponse> = await apiService.post('/login', creds);
    return data;
  } catch (e) {
    return { result: false };
  }
}

export default login;
