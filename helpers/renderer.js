import path from "path"
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"
import { renderRoutes } from "react-router-config"

import { Provider } from 'react-redux';
import serialize from "serialize-javascript"

import { ChunkExtractor } from '@loadable/server'

export default (req, store, context) => {

    const statsFile = path.resolve('./build/loadable-stats.json');
    const extractor = new ChunkExtractor({ statsFile })

    const content = renderToString(
        extractor.collectChunks(
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    {renderRoutes(Routes)}
                </StaticRouter>
            </Provider>
        )
    );

    const storeRehydrationState = serialize(store.getState());
    // console.log("***********");
    // console.log(req.path);
    // console.log("SERVER HTML |" + content + "|");
    return `
    <html>
        <head>
            <title>Outclass</title>
            <!-- Bootstrap CSS -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">

            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window.__STORE_REHYDRATION_STATE__ = ${storeRehydrationState}
            </script>
            <script src="/bundle.client.js"></script>
           
        </body>
    </html>
`;
}