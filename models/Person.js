var orm = require("orm");
module.exports = function() {
    return new Promise(function (resolve, reject) {
        orm.connect("postgres://yordan:123@localhost:5432/car_shop", function (err, db) {
            if (err) {
                reject(err);
            }
            var Person = db.define("person", {
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
            db.sync(function(err) {
                if (err)  {
                    reject(err);
                }
                resolve(Person);
            });
        });
    });
}