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

  async createOrUpdate(userDto) {
    const userId = userDto.id;
    delete userDto.id;

    await User.updateOne({ user_id: userId }, userDto, { upsert: true });
  }
}

module.exports = new UserRepository();
