import "reflect-metadata";
import React from 'react';
import {createGlobalStyle} from 'styled-components';
import MainView from './main/MainView';

const GlobalStyles = createGlobalStyle`
`;

class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyles />
                <MainView />
            </div>
        );
    }
}

export default App;
