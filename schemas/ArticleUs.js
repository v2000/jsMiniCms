// Schema for Article
exports.schema = {
  title: String,
  smallbody: String,
  body: String,
  categoryId: String,
  data: String,
  userId:String,
};


var autoREST = require("../libs/autoREST");
var routes = exports.routes = autoREST.buildRoutes(
  "ArticleUs", "articles:ALL"
);
// List of articles - modify with a join on category
autoREST.modify(routes["GET:articles"],{
  populate: {
    join: "User",
    joinOn: ["userId", "_id"],
    filter: "email",
    toProperty: "user"
  }
});

// One article - modify with join on category
// (reusing the join from our previous route)
autoREST.modify(routes["GET:articles/:id"],{
  populate: routes["GET:articles"].populate
});

// Return a list of articles in a certain categpry
autoREST.add(routes,"GET:articles/user/:id",{
  query: function(req){ return {userId: req.params.id}; }
});