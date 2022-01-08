import DebugHandler from '../../utils/Debug/component';
import { IClientResponse,IFetchParams } from '../../utils/Fetch/types';

export type TProviderAuthWithSecret = {
  secret: string;
};

export type TProviderAuthWithCredentials = {
  user: string;
  password: string;
};

export type TProviderAuthTypes = TProviderAuthWithSecret | TProviderAuthWithCredentials;

export type TProviderUserData = {
  name?: string;
  username?: string;
  email: string;
  level: number;
};

export type TProviderAuthResponse = {
  token: string;
  user: TProviderUserData;
  meta?: Record<string, unknown>;
};

export type TDefaultProviderParams = {
  secret?: string;
  credentials?: TProviderAuthWithCredentials;
  url?: string;
  debugger?: DebugHandler;
};

export type TGrantType = 'token' | 'credential';

export interface IDefaultProvider {
  /**
   * Setup authentication method from provider.
   * Could be token, credentials ans 2FA
   */
  authenticate: () => Promise<TProviderAuthResponse> | void;

  /**
   * Send request to provider.
   * All requests must use this method to work
   */
  push: (x?: IFetchParams) => Promise<IClientResponse> | unknown;

  /**
   * Pull all available data from provider
   * Remeber is not part of Graphql Environment.
   * [OBS] It is recomended for use only when you want to
   * sync or feed 'Probo Database'
   */
  pull: <T>(x?: IFetchParams) => Promise<T[] | void | any>;

  /**
   * Pull a single item from provider.
   * [OBS] It is recomended for use only when you want to
   * sync or feed 'Probo Database'
   */
  pick: <T>(id: string | number, x?: IFetchParams) => Promise<T | void | any>;
}