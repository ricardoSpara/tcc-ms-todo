const User = require("../models/User");

class UserRepository {
  async findAll() {
    const users = await User.find({});

    return users;
  }

  async findByUserId(userId) {
    const user = await User.findOne({ user_id: userId });

    return user;
  }

  async create({ name, email, userId }) {
    const user = await User.create({
      name,
      email,
      user_id: userId,
    });

    user.save();

    return task;
  }
}

module.exports = new UserRepository();
