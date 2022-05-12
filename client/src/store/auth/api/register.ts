import { AxiosResponse } from 'axios';
import apiService from '../../../service/apiService';

type RegisterDataResponse = {
  result: boolean;
  token?: string;
};

type RegisterDataRequest = {
  email: string;
  password: string;
};

async function register(creds: RegisterDataRequest): Promise<RegisterDataResponse> {
  try {
    const { data }: AxiosResponse<RegisterDataResponse> = await apiService.post('/reg', creds);
    return data;
  } catch (e) {
    return { result: false };
  }
}

export default register;
