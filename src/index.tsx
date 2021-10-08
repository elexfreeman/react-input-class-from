
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Module/Store/Store";

import 'spectre.css/dist/spectre.min.css';
import './Module/Main.css';


import App from "./Module/App/App";
import * as serviceWorker from './serviceWorker';

declare let window: any;


/**
 * главная функция
 */
async function main() {
    document.title = "Demo react-class-forms"

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </Provider>
            </Router>
        </React.StrictMode>,

        document.getElementById('root')
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.register();

}

main();
