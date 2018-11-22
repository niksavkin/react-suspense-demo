import React, {Suspense} from 'react';
import styled from 'styled-components';
import ErrorBoundary from './ErrorBoundary'

const LoadingLabel = styled.div`
  color: blue;
`;

export default class Loader extends React.Component {
    render() {
        const {children} = this.props;

        return <Suspense fallback={<LoadingLabel>Loading data...</LoadingLabel>}>
            <ErrorBoundary>
                {children}
            </ErrorBoundary>
        </Suspense>
    }
}
