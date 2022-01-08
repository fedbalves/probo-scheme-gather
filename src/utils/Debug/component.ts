import Debug, { Debugger } from 'debug';

import { IDebug } from './types';

const kSetup = Symbol('setup');

export default class {
  #debugLibrary;

  #debugger?: Debugger;

  constructor(args: IDebug) {
    this.#debugLibrary = Debug;
    this[kSetup](args.service);
  }

  private [kSetup](service: string): void {
    if (service === '') {
      throw new Error('Você passou uma "String" vazia. É isso mesmo?!');
    }

    this.#debugger = this.#debugLibrary(service);
  }

  public log(data: unknown): void {
    this.#debugger && this.#debugger(data);
  }
}