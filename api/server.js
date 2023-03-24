const express = require("express");
const cors = require("cors");
const { logger } = require("./middleware");

const server = express();
server.use(express.json());
server.use(logger);

module.exports = server;
