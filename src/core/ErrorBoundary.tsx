import React from "react";
import styled from 'styled-components';

const StyledErrorText = styled.div`
  color: red;
  padding: 20px 0;
`;

export default class ErrorBoundary extends React.Component {
    state: {error?: Error} = {};

    componentDidCatch(error: Error) {
        this.setState({error})
    }

    render() {
        const {children} = this.props;
        const {error} = this.state;

        return error ? <StyledErrorText>
                Error happen!: {error.message}
            </StyledErrorText> : children
    }
}
