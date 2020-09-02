import React from 'react';
import {renderToString} from 'react-dom/server';
import App from "../client/App"

export default  () => {
    const content = renderToString(<App />);
   return `
    <html>
        <head>
            <title>Outclass</title>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        <script src="/bundle.client.js"></script>
    </html>`;
}