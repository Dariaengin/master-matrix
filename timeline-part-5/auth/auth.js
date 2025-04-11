const isLoggedIn = (req, res, next) => {
    const token = req.cookies.authToken;//Check for token in cookies
    if (token) {
      next();// User is logged in, continue to the next middleware or route handler
    } else {
      res.redirect('/user/signup-login');// No token = not logged in, redirect to login/signup page
    }
  };
  
  const isSignUpLoginEnable = (req, res, next) => {
    const token = req.cookies.authToken;
    if (!token) {
      next();// No token = not logged in, allow access to login/signup page
    } else {
      res.redirect('/');// Already logged in = redirect to home or dashboard
    }
  };
  
  module.exports = {
    isLoggedIn,
    isSignUpLoginEnable,
  };