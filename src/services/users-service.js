const userRepository = require("../repositories/user-repository");

class UserService {
  constructor() {
    this.userRepository = userRepository;
  }

  async createOrUpdate(userDto) {
    await this.userRepository.createOrUpdate(userDto);
  }
}

module.exports = new UserService();
