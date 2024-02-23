require("dotenv").config();
const passport = require('passport')
const { User } = require('../models')
const { createCryptoString } = require('../../utils/cryptoString')

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_GOOGLE_URL
},
    async function (accessToken, refreshToken, profile, cb) {
        //add use
        const email = profile.emails[0].value || null;
        const user = await User.findOne({ where: { email } });
        if (user) {
            return cb(null, user);
        } else {
            const newUser = await User.create({
                userName: profile.displayName,
                email,
                password: createCryptoString(),
                isVerified: profile.emails[0].verified,
                name: profile.displayName,
                verifiedDate: new Date(),
                avatarUrl: profile.photos[0].value
            });
            return cb(null, newUser);
        }
    }
));
