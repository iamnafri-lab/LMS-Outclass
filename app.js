const http = require("http");
const express = require("express");

import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes"
import renderer from "./helpers/renderer";
import createServerStore from "./helpers/createServerStore";

const app = express();


app.use(express.static("dist"));

app.get("*", (req, res) => {

  const store = createServerStore();
  const loadDataPromises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.component.loadData ? route.component.loadData() : null;
  });



  Promise.all(loadDataPromises).then(() => {
    const context = {};
    const markup = renderer(req, store, context);
    if (context.notFound === true) res.status(404);

    res.send(markup);
  }).catch(err => {
    console.log(err)
    res.send(err)
  })

});


const server = http.createServer(app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port => ${port}`);
});
