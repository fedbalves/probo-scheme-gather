import ErrorHandler from '../../utils/Error/component';
import { IClientResponse, IFetchParams } from '../../utils/Fetch/types';
import { IDefaultProvider } from './types';

export default abstract class implements IDefaultProvider {
  contructor() {
    new ErrorHandler("You must implement a 'contructor' in your 'class'.");
  }

  public authenticate() {
    new ErrorHandler("You must implement a 'connect' in your 'class'.");
  }

  public async push(_?: IFetchParams): Promise<IClientResponse | void> {
    new ErrorHandler(`You must implement a 'push' in your 'class'.`);
  }

  public async pull<T>(_?: IFetchParams): Promise<T[] | void> {
    new ErrorHandler(`You must implement a 'pull' in your 'class'.`);
  }

  public async pick<T>(_?: number | string, __?: IFetchParams): Promise<T | void> {
    new ErrorHandler(`You must implement a 'pick' in your 'class'.`);
  }
}
