const { check } = require('express-validator');
const { User } = require('../../db/models');

const passwordValidator = check('password')
  .not()
  .isEmpty()
  .withMessage('Please provide a password')
  .isLength({ max: 60 })
  .withMessage('Password must not be less than 60 characters long');

const confirmPasswordValidator = check('confirmPassword')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a value for Confirm Password')
  .isLength({ max: 60 })
  .withMessage('Confirm Password must not be more than 60 characters long')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  });

const userNameValidator = check('username')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a user name')
  .isLength({ max: 60 })
  .withMessage('User name must be less then 100 characters');

const validateSignup = [userNameValidator, passwordValidator, confirmPasswordValidator];

const validateLogin = [passwordValidator];

module.exports = {
  validateSignup,
  validateLogin,
};
