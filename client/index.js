import "core-js/stable";
import "regenerator-runtime/runtime";

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'
import Routes from "./Routes";

import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit'
import reducers from "./store/reducers";


const store = configureStore({ reducer: reducers, preloadedState: window.__STORE_REHYDRATION_STATE__ })

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));