const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('./user');
require('dotenv').config();

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, user); // attach user to req.user
      } else {
        return done(null, false); // no user found
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

// Middleware to protect routes
exports.isAuthenticated = passport.authenticate('jwt', { session: false });
