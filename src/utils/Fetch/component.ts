import axios, { Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import DebugHandler from '../Debug/component';
// import ErrorHandler from '../Error/component';
import { IClientParams } from './types';

export default class ClientClass extends Axios {
  #debugger: DebugHandler;

  instance: AxiosInstance;

  constructor(args: IClientParams = {}) {
    super();
  
    this.#debugger = args.debugger || new DebugHandler({ service: 'client-fetcher' });

    const instance = axios.create();

    instance.interceptors.request.use((config: AxiosRequestConfig) =>{
      this.#debugger.log(`REQUEST: ${config.url}`);
      return config;
    });
    
    instance.interceptors.response.use((response: AxiosResponse) => {
      this.#debugger.log(`RESPONSE: ${response.config.url}`);
      return response;
    });

    this.instance = instance;
  }
}
