module.exports = (sequelize, Sequelize) => {
    let Auth = sequelize.define("auth", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_loggedIn: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    });
  
    return Auth;
  };
  