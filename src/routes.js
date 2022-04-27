const { Router } = require("express");
const TaskController = require("./controllers/todo-controller");

const routes = new Router();

routes.get("/task", TaskController.index);
routes.post("/task", TaskController.store);
routes.put("/task/:userId", TaskController.update);
routes.delete("/task/:userId", TaskController.destroy);

module.exports = routes;
