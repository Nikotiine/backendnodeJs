const { database } = require("../config_db/config_db");
const { DataTypes } = require("sequelize");

const user = database.define("user", {
  email: { type: DataTypes.STRING },
  prenom: { type: DataTypes.STRING },
  age: { type: DataTypes.INTEGER },
  admin: { type: DataTypes.BOOLEAN },
});
//exporte la table user
module.exports = { user };
