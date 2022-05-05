const { Router } = require("express");
const TaskController = require("./controllers/todo-controller");

const routes = new Router();

routes.get("/tasks", TaskController.index);
routes.post("/tasks", TaskController.store);

module.exports = routes;
