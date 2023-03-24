const uuid = require("uuid");

function getId() {
  return uuid.v1();
}
const initialUsers = () => {
  return [
    { id: getId(), username: "p4ck", password: "1234" },
    { id: getId(), username: "p4ck1", password: "1234" },
    { id: getId(), username: "p4ck2", password: "1234" },
    { id: getId(), username: "p4ck3", password: "1234" },
  ];
};

let users = initialUsers();

function getAllUsers() {
  return users;
}
function createUsers(user) {
  user.id = getId();
  users.push(user);
}
function findUser(user) {
  let isTrue = false;
  users.forEach((item) => {
    if (item.userName === user.userName && item.password === user.password) {
      isTrue = true;
    }
  });

  return isTrue;
}
function checkIsContrastUser(username) {
  return users.find((item) => item.username === username);
}

module.exports = {
  checkIsContrastUser,
  getAllUsers,
  findUser,
  createUsers,
};
