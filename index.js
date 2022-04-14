"use strict";
const express = require("express");
const app = express();
const cors = require("cors");
const { newUser } = require("./controller/userController");
app.use(express.json());
app.use(cors());
require("./config_db/lauch_db");
//----------ou ecoute le serveur

//todo : creer le router doc sur express.router
app.post("/newuser", (req, res) => {
  newUser(req.body).then((reponsedelafonction) => {
    res.send(reponsedelafonction);
  });
});
app.listen(3000, () => {
  console.log("serveur ecoute sur le port : 3000");
});
