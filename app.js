const http = require("http");
const express = require("express");

import renderer from "./helpers/renderer";
import createStore from "./client/store/createStore"
const app = express();


app.use(express.static("assets"))
app.get("*", (req, res) => {

  const store = createStore();

  res.send(renderer(req, store));
});


const server = http.createServer(app);

const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is listening on port => ${port}`);
});
