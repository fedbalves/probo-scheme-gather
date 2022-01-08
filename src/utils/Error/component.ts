import { IDefaultError } from './types';

export default class extends Error implements IDefaultError {
  constructor(msg: string) {
    super();

    this.message = msg;
    this.name = 'Exception';
  }
}