const courseRouter = require("../controllers/api/courses");
const { exceptionHandler } = require("../middlewares/errors");
module.exports = function (app) {
  app.use("/courses", courseRouter);
  app.use(exceptionHandler);
};
