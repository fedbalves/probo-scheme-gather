
   
import DebugHandler from '../../utils/Debug/component';

export type TDataLayerStrategies = 'postgres' | 'mongodb';

export type TConnectionParams = {
  host: string;
  dbname: string;
  username: string;
  userpassword: string;
  port: number;
};

export type TQueryFilters<T> = T & Record<string, unknown>;

export interface IDataLayer {
  database: unknown;
  instance: () => unknown;
  test: () => boolean | void;
  connect: (c: TConnectionParams) => unknown | void;
  query: (q: TQueryFilters<Record<string, unknown>>) => unknown | void;
  update: (q: TQueryFilters<Record<string, unknown>>) => unknown | void;
  delete: (q: TQueryFilters<Record<string, unknown>>) => unknown | void;
  put?: (q: TQueryFilters<Record<string, unknown>>) => boolean;
  define?: (q: TQueryFilters<Record<string, unknown>>) => unknown;
}

export type TDataLayerParams = {
  debugger?: DebugHandler;
  strategy: TDataLayerStrategies;
} & TConnectionParams;
