const taskReporsitory = require("../repositories/task-reporsitory");
const userRepository = require("../repositories/user-repository");

class TaskController {
  async index(req, res) {
    const tasks = await taskReporsitory.findAll();

    return res.json(tasks);
  }

  async store(req, res) {
    const { title, description, status, user_id: userId } = req.body;

    const user = await userRepository.findByUserId(userId);

    if (!user) {
      return res.json({ message: "User not exists" });
    }

    const task = await taskReporsitory.create({ title, description, status });

    user.tasks.push(task);
    user.save();

    return res.json(user);
  }

  async update(req, res) {
    return res.json({ ok: true });
  }

  async destroy(req, res) {
    return res.json({ ok: true });
  }
}

module.exports = new TaskController();
