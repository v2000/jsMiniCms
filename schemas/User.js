// Schema for Article
exports.schema = {
  firstname: String,
  lastname: String,
  role: String,
  password: {
    type: String,
    unique: true
  },
  email: String,
  username: {
    type: String,
    unique: true
  }
};

// Require autoREST-library
var autoREST = require("../libs/autoREST");

// API routes for Article
var routes = exports.routes = autoREST.buildRoutes(
  "User", "users:ALL"
);

// List of articles - modify with a join on category
autoREST.modify(routes["GET:articles"],{
  populate: {
    join: "Category",
    joinOn: ["categoryId", "_id"],
    filter: "name",
    toProperty: "category"
  }
});

// One article - modify with join on category
// (reusing the join from our previous route)
autoREST.modify(routes["GET:articles/:id"],{
  populate: routes["GET:articles"].populate
});

// Return a list of articles in a certain categpry
autoREST.add(routes,"GET:articles/category/:id",{
  query: function(req){ return {categoryId: req.params.id}; }
});