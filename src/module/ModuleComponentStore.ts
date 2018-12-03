import {observable, action} from 'mobx';
import {injectable, inject} from "inversify";
import Resource from '../core/Resource';
import ApiService, {DataType} from './ApiService';


@injectable()
export default class ModuleComponentStore {
    private _data: Resource<DataType>;
    @observable public testText: string = 'Hello, World';
    @inject(ApiService) private _api!: ApiService;

    constructor() {
        this._data = new Resource<DataType>(
            () => this._api.getData()
        )
    }

    get field() {
        return this._data.get().title
    }

    @action changeTestText() {
        this.testText = 'Hoho';
    }
}
