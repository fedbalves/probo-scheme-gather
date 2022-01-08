import DebugHandler from '../../utils/Debug/component';
import repositoriesProps from './props';

export default class {
    #debugger: DebugHandler;

    constructor(params: any) {
        this.#debugger = params.debugger || new DebugHandler({ service: 'model-repositories' });
        this.#debugger.log(`${repositoriesProps.resource} Model initialized.`);
    }
}
