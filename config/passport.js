const passport = require("passport");
const passportJWT = require("passport-jwt");
const { User } = require("../src/models");
const cfg = require("./config");
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = () => {
    const strategy = new Strategy(params, (payload, done) =>{
        User.findByPk(payload.id).then(payload => {
          console.log(payload)  
          if(payload) return done(null, payload)
        })
    })
    passport.use(strategy)
    return {
        initialize: function() {
          return passport.initialize();
        },
        authenticate: function() {
          return passport.authenticate("jwt", cfg.jwtSession);
        }
    }
}



