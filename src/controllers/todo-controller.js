const taskReporsitory = require("../repositories/task-reporsitory");

class TaskController {
  async index(req, res) {
    const tasks = await taskReporsitory.findAll();

    return res.json(tasks);
  }

  async store(req, res) {
    const { title, description, status } = req.body;

    const task = await taskReporsitory.create({title, description, status});

    return res.json(task);
  }

  async update(req, res) {
    return res.json({ok: true});
  }

  async destroy(req, res) {
    return res.json({ok: true});
  }
}

module.exports = new TaskController();
