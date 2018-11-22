import {observable, computed} from 'mobx';
import {injectable, inject} from "inversify";
import Resource from '../core/Resource';
import ApiService, {DataType} from './ApiService';


@injectable()
export default class ModuleComponentStore {
    @observable private _data: Resource<DataType>;
    @inject(ApiService) private _api!: ApiService;

    constructor() {
        this._data = new Resource<DataType>(
            () => this._api.getData()
        )
    }

    @computed get field() {
        return this._data.get().title
    }
}
