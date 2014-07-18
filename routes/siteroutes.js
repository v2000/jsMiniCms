// app/routes.js
module.exports = function(app) {

  // =====================================
  // HOME PAGE  ========
  // =====================================
  app.get('/', function (req, res){
  res.render('layout');
}); // startpoint for normal users


  
  app.get('/partials/site/:name', function (req, res) {
  var name = req.params.name;
  console.log("site name", name);
  res.render('partials/site/' + name);
});
}