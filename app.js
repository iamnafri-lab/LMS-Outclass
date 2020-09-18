import "core-js/stable";
import "regenerator-runtime/runtime";

const http = require("http");
const express = require("express");
require("express-async-errors");

import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createServerStore from "./helpers/createServerStore";

//registering global exception handler
const globalExceptionHandler = require("./startup/globalExceptionHandler");
globalExceptionHandler();

const app = express();

//registering all the server routes
const routeRegisterer = require("./startup/routes");
routeRegisterer(app);

app.use(express.static("dist"));
app.get("*", (req, res) => {
  const store = createServerStore();
  const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.component.loadData ? route.component.loadData() : null;
  });

  Promise.all(loadDataPromises)
    .then(async () => {
      const context = {};
      const markup = await renderer(req, store, context);

      if (context.notFound === true) res.status(404);

      res.send(markup);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

const server = http.createServer(app);

const port = process.env.PORT || 8080;
const { NODE_ENV } = process.env;
server.listen(port, () => {
  console.log(
    `Server is listening on port ${port} in ${NODE_ENV} environment.`
  );
});
