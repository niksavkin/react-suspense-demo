import React, {Suspense, lazy} from 'react';
import {observer} from 'mobx-react';
import styled from 'styled-components';

const ModuleView = lazy(() => import('./../module'));

const StyledLoadingLabel = styled.div`
  color: magenta;
`;

@observer
export default class MainView extends React.Component {
    render() {
        return <div>
            <Suspense fallback={<StyledLoadingLabel>Loading module...</StyledLoadingLabel>}>
                <ModuleView />
            </Suspense>
        </div>
    }
}
