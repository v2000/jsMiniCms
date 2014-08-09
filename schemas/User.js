// Schema for User
var bcrypt   = require('bcrypt-nodejs');

exports.schema = {
        email        : String,
        password     : String,
};


exports.methods = {
    generateHash: function (password) {
        console.log("Method generateHash");
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },
    validPassword: function (password) {
         console.log("Method validPassword");
         return bcrypt.compareSync(password, this.password);
    }
};


// Require autoREST-library
var autoREST = require("../libs/autoREST");

// API routes for User
var routes = exports.routes = autoREST.buildRoutes(
  "User", "users:ALL"
);
