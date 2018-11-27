import React from 'react';
import {lazyInject} from '../core/ioc';
import ModuleComponentStore from './ModuleComponentStore';
import {observer} from "mobx-react";

@observer
export default class ModuleComponentView extends React.Component {
    @lazyInject(ModuleComponentStore)
    private _store!: ModuleComponentStore;

    render() {
        return <div>
            <p>{this._store.field}</p>
            <p>{this._store.testText}</p>
            <button onClick={() => this._store.changeTestText()}>Test</button>
        </div>
    }
}
