export default class Resource<T> {
    private _value!: T;
    private _error!: Error;
    private _promise: () => Promise<T>;

    constructor(promise: () => Promise<T>) {
        this._promise = promise;
    }

    get() {
        if (this._value) {
            return this._value;
        } else if (this._error) {
            throw this._error;
        } else {
            throw this._promise()
                .then(data => this._value = data)
                .catch(err => this._error = err)
        }
    }
}
