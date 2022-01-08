import ErrorHandler from '../../utils/Error/component';
import { IDataLayer, TConnectionParams, TQueryFilters } from './types';

export default abstract class implements IDataLayer {
  database: unknown;

  constructor() {
    new ErrorHandler('Constructor must be implemented');
  }

  test() {
    new ErrorHandler("You must implement 'test' in your class.");
  }

  connect(_: TConnectionParams) {
    new ErrorHandler("You must implement 'connect' in your class.");
  }

  query(_: TQueryFilters<Record<string, unknown>>) {
    new ErrorHandler("You must implement 'query' in your class.");
  }

  update(_: TQueryFilters<Record<string, unknown>>) {
    new ErrorHandler("You must implement 'update' in your class.");
  }

  delete(_: TQueryFilters<Record<string, unknown>>) {
    new ErrorHandler("You must implement 'delete' in your class.");
  }

  instance() {
    new ErrorHandler("You must implement 'instance' in your class.");
  }
}
