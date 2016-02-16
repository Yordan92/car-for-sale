// module.exports = {
//    Person : require('./Person'),
//    Car : require('./Car')
// }; 
// var orm = require('orm');
// orm.connect("postgres://yordan:123@localhost:5432/car_shop?debug=true", function (err, db) {
module.exports = function(db, cb) {
    db.load("./Person", function(err) {
        if (err) {
            return cb(err);
        }
        return cb();
    });
    
    db.load("./Car", function(err) {
        if (err) {
            return cb(err);
        }
        return cb();
    });
};
