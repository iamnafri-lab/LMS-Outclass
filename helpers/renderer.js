import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"
import { renderRoutes } from "react-router-config"

import { Provider } from 'react-redux';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    );
    return `
    <html>
        <head>
            <title>Outclass</title>
        </head>
        <body>
            <div id="root">${content}</div>
        <script src="/js/bundle.client.js"></script>
        </body>
    </html>
`;
}