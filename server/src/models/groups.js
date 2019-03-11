"use strict";
module.exports = (sequelize, DataTypes) => {
  const Groups = sequelize.define(
    "Groups",
    {
      groupName: DataTypes.STRING
    },
    {}
  );
  Groups.associate = function(models) {
    // associations can be defined here
    models.Groups.belongsToMany(models.users, { through: "GroupUsers" });
  };
  return Groups;
};
