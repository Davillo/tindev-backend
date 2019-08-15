const express = require("express");
const routes = express.Router();
const DevController = require("./controllers/DevControllers");
const LikeController = require("./controllers/LikeController");
const DislikeController = require("./controllers/DislikeController");

routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/dislikes", DislikeController.store);
routes.get('/devs', DevController.index);
module.exports = routes;
