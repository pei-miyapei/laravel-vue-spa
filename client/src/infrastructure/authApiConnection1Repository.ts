import { ApiConnection1Repository } from './apiConnection1Repository';
import type { AxiosRequestConfig } from 'axios';
import type { useAuth } from '../store/useAuth';

export abstract class AuthApiConnection1Repository extends ApiConnection1Repository {
  constructor(auth: useAuth) {
    super();
    this.client.interceptors.request.use((config: AxiosRequestConfig) => {
      if (!config.headers) config.headers = {};
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
      return config;
    });
  }
}
