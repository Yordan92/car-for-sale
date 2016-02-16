var orm = require("orm");
module.exports = function(db, cb) {
    // return new Promise(function (resolve, reject) {
        // orm.connect("postgres://yordan:123@localhost:5432/car_shop?debug=true", function (err, db) {
            // if (err) {
            //     reject(err);
            // }
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
        // });
    // });
};