var orm = require("orm");
module.exports = function(db, cb) {

    db.define("car", {
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
    return cb();
};
