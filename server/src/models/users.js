"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Users.associate = function(models) {
    // associations can be defined here
    models.Users.belongsToMany(models.groups, { through: "GroupUsers" });
  };
  return Users;
};
