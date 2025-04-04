const users = require('../models/userModel');
const bcrypt = require('bcryptjs');

const loginUser = async (req, res) => {
   userModel.find() //Fetches all users from the MongoDB users collection. 
   .then ((users) => {
      const user = users.find(user => user.email === req.body.email);//Looks for a user with the same email as the one provided in the request body.
      if (!user) {
         return res.render('login', { error: 'Invalid email or password' });
      }
      const isPasswordValid = bcrypt.compareSync(req.body.password, user.passwordHash);
      if (!isPasswordValid) {
         return res.render('login', { error: 'Invalid email or password' });
      }
    //   req.session.user = user;
      res.redirect('/');
   })

  res.render('login', { error: null });
};
const showLoginPage = (req, res) => {
    res.render('login', { error: null });
  };
  
  module.exports = {
    loginUser,
    showLoginPage
  };


