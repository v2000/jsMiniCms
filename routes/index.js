exports.index = function(req, res){
  res.render('layout');
};

exports.adminIndex = function(req, res){
  res.render('adminLayout');
};

/*exports.partials = function (req, res) {
  var name = req.params.name;
  console.log("name", name);
  res.render('partials/site/' + name);
};*/

exports.site = function (req, res) {
  var name = req.params.name;
  console.log("site name", name);
  res.render('partials/site/' + name);
};

exports.admin = function (req, res) {
  var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/' + name);
};

exports.adminArticles = function (req, res) {
  var name = req.params.name;
  console.log("adminArticles name", name);
  res.render('partials/admin/templates/articles/' + name);
};

exports.adminArchive = function (req, res) {
  var name = req.params.name;
  console.log("adminArchive name", name);
  res.render('partials/admin/templates/archive/' + name);
};

exports.adminCategories = function (req, res) {
  var name = req.params.name;
  console.log("adminCategories name", name);
  res.render('partials/admin/templates/categories/' + name);
};

exports.adminUsers = function (req, res) {
  var name = req.params.name;
  console.log("adminUsers name", name);
  res.render('partials/admin/templates/users/' + name);
};