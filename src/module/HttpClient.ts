import {injectable} from 'inversify'

const API_URL = 'https://jsonplaceholder.typicode.com/';

@injectable()
export default class HttpClient {
    private _defaultOpts: Partial<RequestInit>;

    constructor() {
        this._defaultOpts = {
            method: 'GET'
        }
    }

    public fetch<T>(path: string, opts?: RequestInit): Promise<T> {
        return fetch(API_URL + path, {...this._defaultOpts, ...opts})
            .then((data: Response) => data.json());
    }
}
