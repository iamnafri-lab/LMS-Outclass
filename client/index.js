import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'
import Routes from "./Routes";

import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'

import createStore from "./store/createStore"
import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));