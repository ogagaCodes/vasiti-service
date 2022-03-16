const UserRepository = require("../repository/user.repository");
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async create(user_name, email, password) {
    return this.userRepository.create(user_name, email, password);
  }

  async validateUser(user_name, email, password) {
    return this.userRepository.create(user_name, email, password);
  }
}
module.exports = UserService;