var orm = require("orm");
module.exports = function() {
    return new Promise(function (resolve, reject) {
        orm.connect("postgres://yordan:123@localhost:5432/car_shop?debug=true", function (err, db) {
            if (err) {
                reject(err);
            }
            var Car = db.define("Car", {
                    modelCar : String,
                    make : String,
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
                // console.log('_____________');
                //  Car.create({
                //     modelCar: 'nes',
                // }, function(err, car) {
                //     console.log(err);
                //     console.log(car);
                // });
            });
        });
    });
};
