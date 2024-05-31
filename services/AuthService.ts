import { AxiosError, AxiosInstance } from 'axios';
import HTTPError from '../network/httpError';
import { AuthResponse, AuthService, UserInfoType } from '../types/AuthTypes';

export default class AuthServiceImpl implements AuthService {
  constructor(private httpClient: AxiosInstance) {}

  async signUp({ email, password }: UserInfoType) {
    const response = await this.httpClient.post<AuthResponse>(
      'api/users/signup',
      { email, password }
    );
    const { data } = response;
    return data;
  }

  async signIn(userInfo: UserInfoType) {
    const response = await this.httpClient.post<AuthResponse>(
      'api/login',
      userInfo
    );
    const { data } = response;
    return data;
  }
}
