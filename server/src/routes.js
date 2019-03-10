module.exports = app => {
  app.get("/", (req, res) => {
    console.log(req);
    res.send({
      message: "hello"
    });
  });
};
