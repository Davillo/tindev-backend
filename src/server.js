const express = require("express"); //importa o express
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const server = express(); //cria uma const de instancia
mongoose.connect(
  "mongodb+srv://davillo:davillo@cluster0-76pdr.mongodb.net/omnistack?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333); //escuta na porta 3333
