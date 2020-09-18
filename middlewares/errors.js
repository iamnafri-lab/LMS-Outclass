exports.exceptionHandler = function (err, req, res, next) {
  if (err.message === "Please upload an image file.") {
    res.status(400).send(err.message);
  } else if (err.message === "File too large") {
    res.status(400).send("File is too large");
  } else {
    console.log("500 Err => ", err);
    res.status(500).send("Something went wrong");
  }
};
