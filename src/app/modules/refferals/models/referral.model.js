module.exports = (sequelize, Sequelize) => {
    let Referral = sequelize.define("referral", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      referred_by: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    return Referral;
  };
  