const express = require('express');
const User = require('../models/usersModel');
const passport = require('passport');
const authenticate = require('../authenticate');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const router = express.Router();
let tempPass = '';

/* GET users listing. */
router.get('/', cors(), function (req, res, next) {
  if (req.user.admin) {
    return User.find();
  } else {
    const err = new Error('You are not an admin!');
    err.status = 403;
    return next(err);
  }
});

router.post('/signup', cors(), (req, res) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        if (req.body.email) {
          user.email = req.body.email;
        }
        if (req.body.password) {
          tempPass = req.body.password;
          bcrypt.hash(tempPass, saltRounds, (err, hash) => {
            user.password = tempPass;
          });
        }
        user.save((err) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({ err: err });
            return;
          }
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        });
      }
    }
  );
});

router.post('/profile', cors(), passport.authenticate('local'), (req, res) => {
  const user = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    success: true,
    token: user,
    status: 'These are the droids you are looking for',
  });
});

router.post('/login', cors(), passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({
    success: true,
    token: token,
    status: 'You are successfully logged in!',
  });
});

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in!');
    err.status = 403;
    return next(err);
  }
});

module.exports = router;
