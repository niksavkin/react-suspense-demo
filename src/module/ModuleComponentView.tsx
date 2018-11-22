import React from 'react';
import {lazyInject} from '../core/ioc';
import ModuleComponentStore from './ModuleComponentStore';


export default class ModuleComponentView extends React.Component {
    @lazyInject(ModuleComponentStore)
    private _store!: ModuleComponentStore;

    render() {
        return <div>{this._store.field}</div>
    }
}
