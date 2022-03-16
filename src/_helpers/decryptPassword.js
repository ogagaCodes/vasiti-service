const bcrypt = require("bcrypt");

exports.dcryptPassword = async (password) => {
  try {
    const match = await bcrypt.compare(password, user.passwordHash);
    if (match) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
