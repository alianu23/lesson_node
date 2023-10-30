const logger = (req, res, next) => {
  console.log(
    "LOG :" + `${req.method} : ${req.url} : ${new Date().toISOString()}`
  );

  next();
};

module.exports = { logger };
