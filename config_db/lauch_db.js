const { database } = require("./config_db");
const { user } = require("../models/user");

// creer ta db sur mariadb avant de mettre en route
(async () => {
  try {
    await database.authenticate();
    await user.sync({ alter: true });
  } catch (err) {
    console.log("Unable to connect to the database:", err);
  }
})();

module.exports = { database };
