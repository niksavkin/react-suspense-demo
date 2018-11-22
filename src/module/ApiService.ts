import {injectable, inject} from "inversify";
import HttpClient from './HttpClient';

export type DataType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

@injectable()
export default class ApiService {
    @inject(HttpClient) _httpClient!: HttpClient;

    public getData(): Promise<DataType> {
        return this._httpClient.fetch<DataType>('todos/1');
    }
}
