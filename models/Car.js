var orm = require("orm");
module.exports = function() {
    return new Promise(function (resolve, reject) {
        orm.connect("postgres://yordan:123@localhost:5432/car_shop", function (err, db) {
            if (err) {
                reject(err);
            }
            var Car = db.define("Car", {
                    model : String,
                    series : String,
                    price : Number,
                    yearOfCreation : String,
                    offerDate : Date,
                    image : String

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
                resolve(Car);
            });
        });
    });
}