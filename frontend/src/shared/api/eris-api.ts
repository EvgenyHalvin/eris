import { ErisApi } from './axios-client/api';
import { apiConfig } from './configurations';
import axios from 'axios';

export const apiInstance = axios.create();
export const erisApi = new ErisApi(apiConfig, undefined, apiInstance);
