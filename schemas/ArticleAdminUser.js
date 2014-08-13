// Schema for Article
exports.schema = {
  title: String,
  smallbody: String,
  body: String,
  categoryId: String,
  date: String,
  userId:String,
};

// Require autoREST-library
var autoREST = require("../libs/autoREST");

// API routes for Article
var routes = exports.routes = autoREST.buildRoutes(
  "ArticleAdminUser", "articles:ALL"
);
// List of articles - modify with a join on user
autoREST.modify(routes["GET:articles"],{
  populate: {
    join: "User",
    joinOn: ["userId", "_id"],
    filter: "name",
    toProperty: "user"
  }
});

// One article - modify with join on user
// (reusing the join from our previous route)
autoREST.modify(routes["GET:articles/:id"],{
  populate: routes["GET:articles"].populate
});

// Return a list of articles in a certain user
autoREST.add(routes,"GET:articles/user/:id",{
  query: function(req){ return {userId: req.params.id}; }
});