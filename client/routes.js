import { lazy } from 'react'

import App from "./App";

import Home from "./pages/Home";
import About from "./pages/About";

export default [
    {
        ...App,
        routes: [
            {
                path: '/about',
                ...About
            },
            {
                path: '/',
                exact: true,
                ...Home

            }
        ]
    }
];

