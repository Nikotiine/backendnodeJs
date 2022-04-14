const { user } = require("../models/user");

async function newUser(dataNewUSer) {
  return user.create({ dataNewUSer });
}

module.exports = { newUser };
