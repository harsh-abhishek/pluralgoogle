var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(){
    passport.use(new TwitterStrategy({
        consumerKey: 'Tw23E7U375YsYOOn2c8v0KNNa',
        consumerSecret: 'wfWQ5hZKJZ7riNWSpqKWQqx3WRSPUedG0OmM7GLrKmp3pbxPET',
        callbackURL: 'https://auth4.herokuapp.com/auth/twitter/callback',
        passReqToCallback: true
    },
    function(req, token, tokenSecret, profile, done){
        var user = {};
        
            //user.email = profile.emails[0].value;
            user.image = profile._json.profile_image_url;
            user.displayName = profile.displayName;
        
            user.twitter = {};
            user.twitter.id = profile.id;
            user.twitter.token = token;
            
            done(null, user);
    }))
};
