var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function () {
    passport.use(new GoogleStrategy({
            clientID: '222556587003-d48del35gflv95nt9kcg4i982h6glogu.apps.googleusercontent.com',
            clientSecret: 'Wfl_mD_b0Sh3fNCN-lcWJlvM',
            callbackURL: 'https://pluralgoogle.herokuapp.com//auth/google/callback'
        },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};
        
            user.email = profile.emails[0].value;
            user.image = profile._json.image.url;
            user.displayName = profile.displayName;
        
            user.google = {};
            user.google.id = profile.id;
            user.google.token = accessToken;
            
            done(null, user);
        }
    ));


};