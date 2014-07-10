// Schema for User
exports.schema = {
  firstname: String,
  lastname: String,
  role: String,
  email: String,
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
};

// Require autoREST-library
var autoREST = require("../libs/autoREST");

// API routes for User
var routes = exports.routes = autoREST.buildRoutes(
  "User", "users:ALL"
);