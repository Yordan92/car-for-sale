var express = require('express'),
    app = express(),
    orm = require("orm"),
    pg = require("pg"),
    debugString = "",
    qHash = require('q-hash'),
    hat = require('hat'),
    models = require('./models/index'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    _ = require('lodash'),
    expressSession = require('express-session'),
    flash = require('connect-flash'),

    currentUser = null;


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    }, function(username, password, done) {
        models.Person().then(function (Person) {
            Person.find({ email: username }, function(err, result) {
                if (err || result[0] && result[0].password !== password) {
                    done(err || 'There is no user with such email');
                } else {
                    done(null, result[0]);
                }
            });

        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    models.Person().then(function (Person) {
        Person.get(id, function(err, user) {
            done(err, user);
        });
    });
});


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
}));

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());



app.use(express.static(require('./middlewares/distPath')));


app.get('/user', function (req, res) {
    console.log(req.session, JSON.stringify(req.user));
    res.send(JSON.stringify(req.user));
});

app.post('/signUp', passport.authenticate('local'), function (req, res) {
    req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
    console.log(req.session);
    res.send(JSON.stringify(req.user));
});

app.post('/registrate', function (req, res) {
    models.Person().then( function(Person) {
        Person.find({
            email: req.body.email,
        }, function(err, result) {
            if (err || result.length !== 0) {
                res.status(500).send({message: 'There is another user with that name'});
            }
        });
        Person.create([{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.pass,
            email: req.body.email
        }]);
    });
});
app.listen(3000);