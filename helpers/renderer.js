import path from "path"
import React from 'react';
import { renderToString } from 'react-dom/server';

import { StaticRouter } from "react-router-dom"
import Routes from "../client/Routes"
import { renderRoutes } from "react-router-config"

import { Provider } from 'react-redux';
import serialize from "serialize-javascript"

import { ChunkExtractor } from '@loadable/server'

import { readFileAsync } from "./file"
export default async (req, store, context) => {

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



    let bootupHTML = await readFileAsync("./dist/bootup.html");

    bootupHTML = bootupHTML.replace("<!-- __STORE_REHYDRATION_STATE__ -->", `<script>window.__STORE_REHYDRATION_STATE__ = ${storeRehydrationState};</script>`);

    bootupHTML = bootupHTML.replace("<div id=\"root\"></div>", `<div id="root">${content}</div>`);

    return bootupHTML;

}