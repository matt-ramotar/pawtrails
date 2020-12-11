const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const { User, List, Trail } = require('../../db/models');
const { authenticated, generateToken } = require('../util/auth');

const router = express.Router();

const email = check('email').isEmail().withMessage('Please provide a valid email address').normalizeEmail();
const firstName = check('firstName').not().isEmpty().withMessage('Please provide a first name');
const lastName = check('lastName').not().isEmpty().withMessage('Please provide a last name');
const username = check('username').not().isEmpty().withMessage('Please provide a username');
const password = check('password').not().isEmpty().withMessage('Please provide a password');

const signupValidators = [email, firstName, lastName, username, password];

router.post(
  '/',
  signupValidators,
  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }

    const user = await User.create(req.body);

    const { jti, token } = generateToken(user);
    user.tokenId = jti;
    await user.save();
    res.cookie('token', token);
    res.json({ token, user: user.toSafeObject() });
  })
);

router.get(
  '/user/:id',
  asyncHandler(async (req, res, next) => {
    console.log(req);
    const userId = req.params.id;

    const user = await User.findByPk(userId);

    res.json(user);
  })
);

router.get('/me', authenticated, (req, res) => {
  res.json({
    email: req.user.email,
    username: req.user.username,
  });
});

router.get(
  '/:id/lists',
  asyncHandler(async (req, res, next) => {
    const userId = req.params.id;
    const user = await User.findByPk(userId, {
      include: [{ model: List, include: [{ model: Trail }] }],
    });
    res.json(user.Lists);
  })
);

module.exports = router;
