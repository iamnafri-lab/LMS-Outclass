const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("course");
});

router.get("/my-course", (req, res, next) => {
  throw new Error("kjsf;ksjd;lfkj");
  res.send("my course");
});

module.exports = router;
