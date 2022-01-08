import DefaultProvider from '../../defaults/Provider/component';
import DebugHandler from '../../utils/Debug/component';
import ErrorHandler from '../../utils/Error/component';
import FetchHandler from '../../utils/Fetch/component';
import { IFetchParams } from '../../utils/Fetch/types';
import githubProps from './props';
import { IGithubProviderParams } from './types';

export default class extends DefaultProvider {
    #debugger: DebugHandler;

    #server: FetchHandler["instance"];

    constructor(params: IGithubProviderParams) {
        super();

        if (!githubProps.token) {
            throw new ErrorHandler(`No Github Token Provided`);
        }

        this.#debugger = params.debugger || new DebugHandler({ service: 'gitlab-provider' });

        const instanceFetcher = new FetchHandler({ debugger: this.#debugger }).instance;
        instanceFetcher.defaults.baseURL = githubProps.url;
        instanceFetcher.defaults.headers.common.Authorization = `token ${githubProps.token}`;
        instanceFetcher.defaults.headers.get['Content-Type'] = 'application/json';

        this.#server = instanceFetcher;
    }

    public async send(params: IFetchParams) {
        return this.#server.request(params);
    }
}
