const Task = require("../models/Task");

class TaskRepository {
    async findAll() {
        const tasks = await Task.find({});

        return tasks;
    }

    async create({title, description, status = false}) {
        const task = await Task.create({
          title,
          description,
          status,
        });
        
        task.save();

        return task;
    }
}

module.exports = new TaskRepository();