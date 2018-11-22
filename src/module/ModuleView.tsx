import React from 'react';
import {observer} from 'mobx-react';
import Loader from '../core/Loader';
import ModuleComponentView from "./ModuleComponentView";


@observer
export default class ModuleView extends React.Component {

    render() {
        return <div>
            <Loader>
                <ModuleComponentView/>
            </Loader>
        </div>
    }
}
