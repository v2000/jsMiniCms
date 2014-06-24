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
  console.log("name", name);
  res.render('partials/site/' + name);
};

exports.admin = function (req, res) {
  var name = req.params.name;
  console.log("name", name);
  res.render('partials/admin/' + name);
};