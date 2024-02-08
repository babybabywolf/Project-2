// Middleware for routes that require a logged in user
module.exports = function (req, res, next) {
    // User is authenticated - proceed with request
    if (req.isAuthenticated()) return next();
    // User is unauthenticated - redirect to login
    res.redirect("/auth/google");
  };
  