var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;


module.exports = function () {
    passport.use(new FacebookStrategy({
            clientID: '121009168534353',
            clientSecret: '22cd582c948babacca253ffc3349aeec',
            callbackURL: 'https://auth4.herokuapp.com/auth/facebook/callback',
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {

            var user = {};

            user.email = profile.emails[0].value;
            //user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
        }));

}
