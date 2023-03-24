const userModel = require("./user-model");

function logger(req, res, next) {
  let timestamp = new Date().toISOString();
  console.log(
    `${timestamp} -- ${req.method} -- ${req.url} 
      }`
  );
  next();
}
function checkUserName(req, res, next) {
  try {
    const { username } = req.body;
    const isSame = !!username && userModel.checkIsContrastUser(username);
    if (isSame) {
      res
        .status(400)
        .json({ message: "Aynı Kullanıcı Adı İle Bir Kullanıcı Bulunuyor" });
    } else next();
  } catch (error) {
    next(error);
  }
}
function isValid(req, res, next) {
  try {
    const user = { username: req.body.username, password: req.body.password };
    let isExist = userModel.findUser(user);
    if (!isExist) res.status(404).json({ message: "Böyle Bir Kullanıcı Yok" });
    else next();
  } catch (error) {
    next(error);
  }
}

function validateNewUser(req, res, next) {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        message: "Boş Alan Bıraktınız",
      });
      next();
    } else {
      req.user = { username: username, password: password };
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  logger,
  checkUserName,
  validateNewUser,
  isValid,
};
