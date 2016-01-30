var express = require('express');
var app = express();
var orm = require("orm");
var pg = require("pg");
var debugString = "";
var qHash = require('q-hash');
var hat = require('hat');
var models = require('./models/index');
var bodyParser = require('body-parser');
var _ = require('lodash');
var currentUser = null;
function isAuth(req, res) {
    _.isUndefined(req.headers.auth) &&
        res.status(500).send({message: 'No valid token'});
}
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

app.use(express.static(require('./middlewares/distPath')));

app.get('/user', function (req, res) {
    console.log(req.headers);
    models.Person().then( function(Person) {
        Person.find({token: req.headers.auth}, function(err, result) {
            currentUser = result[0];
            res.send(result[0]);
        });
    })
});

app.post('/signUp', function (req, res) {
    models.Person().then( function(Person) {
        Person.find({
            firstName: req.body.name,
            password: req.body.pass
        }, function(err, result) {
            if (err || result.length === 0) {
                res.status(500).send({message: 'No user'});
            } else {
                currentUser = result[0];
                res.send(result[0]);
            }

        });
    })
});
app.post('/registrate', function (req, res) {
    models.Person().then( function(Person) {
        Person.find({
            firstName: req.body.firstName,
        }, function(err, result) {
            if (err || result.length !== 0) {
                res.status(500).send({message: 'There is another user with that name'});
            }          
        });
        Person.create([{
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.pass,
            token: null
        }]);
    })
});
app.listen(3000);