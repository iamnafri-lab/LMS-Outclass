const http = require("http");
const express = require("express");

import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes"
import renderer from "./helpers/renderer";
import createServerStore from "./helpers/createServerStore";

const app = express();


app.use(express.static("assets"));

app.get("*", (req, res) => {

  const store = createServerStore();
  const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  });

  Promise.all(loadDataPromises).then(() => {
    res.send(renderer(req, store));
  }).catch(err => {
    res.send(err.message)
  })

});


const server = http.createServer(app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port => ${port}`);
});
