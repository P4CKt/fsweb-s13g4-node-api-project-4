function logger(req, res, next) {
  let timestamp = new Date().toISOString();
  console.log(
    `${timestamp} -- ${req.method} -- ${req.url} 
      }`
  );
  next();
}

module.exports = {
  logger,
};
