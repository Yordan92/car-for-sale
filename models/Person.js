var orm = require("orm");
module.exports = function(db, cb) {
    db.define("person", {
        firstName : String,
        lastName : String,
        password : String,
        email: String
    }, {
        methods: {
           
        },
        validations: {
        }
    });
    return cb();
};