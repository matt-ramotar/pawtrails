'use strict';

const { Op, Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Photo, { foreignKey: 'userId' });

      User.belongsToMany(models.Trail, {
        through: models.UserTrail,
        foreignKey: 'userId',
        otherKey: 'trailId',
      });

      User.belongsToMany(models.List, {
        through: models.UserTrail,
        foreignKey: 'userId',
        otherKey: 'listId',
      });
    }

    toSafeObject() {
      const { id, username } = this;
      return { id, username };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }
  }

  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 40],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          len: [3, 255],
        },
      },
      hashedPassword: {
        type: DataTypes.STRING(60).BINARY,
        allowNull: false,
        validates: {
          len: [60, 60],
        },
      },
    },
    {
      defaultScope: {
        attributes: {
          exclude: ['hashedPassword', 'email', 'updatedAt'],
        },
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ['hashedPassword'] },
        },
        loginUser: {
          attributes: {},
        },
        profile: {
          attributes: {
            exclude: ['hashedPassword', 'email', 'updatedAt'],
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  User.getCurrentUserById = async function (id) {
    return await User.scope('currentUser').findByPk(id);
  };

  User.login = async function ({ username, password }) {
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: [{ username }, { email: username }],
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.getCurrentUserById(user.id);
    }
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username,
      email,
      hashedPassword,
    });
    return await User.getCurrentUserById(user.id);
  };

  return User;
};
