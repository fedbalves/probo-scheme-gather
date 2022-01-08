import { AxiosRequestConfig, AxiosResponse } from 'axios';

import DebugHandler from '../Debug/component';


export interface IClientParams {
  debugger?: DebugHandler;
}

export type IClientResponse = AxiosResponse;

export type IFetchParams = AxiosRequestConfig;
