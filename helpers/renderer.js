import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"
import { renderRoutes } from "react-router-config"

import { Provider } from 'react-redux';
import serialize from "serialize-javascript"

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    );

    const storeRehydrationState = serialize(store.getState());
    return `
    <html>
        <head>
            <title>Outclass</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.__STORE_REHYDRATION_STATE__ = ${storeRehydrationState}
            </script>
            <script src="/js/bundle.client.js"></script>
        </body>
    </html>
`;
}