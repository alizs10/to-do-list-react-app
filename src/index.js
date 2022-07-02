import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import GlobalState from './components/containers/GlobalState';
import { store } from './Store';

ReactDOM.render(
    <Provider store={store}>
        <GlobalState>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalState>
    </Provider>
    ,
    document.getElementById('root'));