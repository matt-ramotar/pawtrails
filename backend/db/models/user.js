'use strict';

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          isEmail: true,
          len: [3, 255],
        },
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        validates: {
          len: [1, 255],
        },
      },
      hashedPassword: {
        allowNull: false,
        type: DataTypes.STRING.BINARY,
        validates: {
          len: [60, 60],
        },
      },
      tokenId: {
        type: DataTypes.STRING,
      },
      photo: {
        type: DataTypes.STRING,
      },
    },
    {}
  );

  User.associate = function (models) {
    User.hasMany(models.List, {
      foreignKey: 'userId',
    });
  };

  User.prototype.isValid = () => true;

  User.prototype.setPassword = password => {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.isValidPassword = password => bcrypt.compareSync(password, this.hashedPassword.toString());

  User.prototype.toSafeObject = function () {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      username: this.username,
      photo: this.photo,
      list: this.Lists,
    };
  };

  return User;
};
