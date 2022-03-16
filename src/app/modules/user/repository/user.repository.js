const { UserModel } = require("../database/user.model");
class UserRepository {
  constructor() {
    this.user = UserModel;
    this.user.sync({ force: true });
  }
  async create(user_name, email, password) {
    return this.user.create({
      user_name,
      email,
      password
    });
  }

  async validate(email) {
    return !!(this.user.findOne({ where: { email: email } }));
  }
}

module.exports =  UserRepository;
