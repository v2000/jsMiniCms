// Schema for Categories
exports.schema = {
  name: String
};

// Require autoREST-library
var autoREST = require("../libs/autoREST");

// API routes for Category
var routes = exports.routes = autoREST.buildRoutes(
  "Category", "categories:ALL"
);
