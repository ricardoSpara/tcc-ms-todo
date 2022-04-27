class TaskController {
  async index(req, res) {
    return res.json({ok: true});
  }

  async store(req, res) {
    return res.json({ok: true});
  }

  async update(req, res) {
    return res.json({ok: true});
  }

  async destroy(req, res) {
    return res.json({ok: true});
  }
}

module.exports = new TaskController();
