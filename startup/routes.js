const courseRouter = require("../controllers/api/courses");
module.exports = function (app) {
  app.use("/courses", courseRouter);
};
