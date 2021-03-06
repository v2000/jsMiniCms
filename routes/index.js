
module.exports = function(app, passport) {

var userMem;
  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/admin/login', function(req, res){
  res.render('adminLayout', { message: req.flash('loginMessage') });
});

 // process the login form
  app.post('/admin/login', passport.authenticate('local-login', {
    successRedirect : '/admin/profile', // redirect to the secure profile section
    failureRedirect : '/admin/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/admin/signup', function(req, res) {
    res.render('adminLayout');
  });

  // process the signup form
  app.post('/admin/signup', passport.authenticate('local-signup', {
    successRedirect : '/admin/profile', // redirect to the secure profile section
    failureRedirect : '/admin/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  //=====================================
  //PROFILE
  //=====================================
  app.get('/admin/profile', isLoggedIn, function(req, res) {
      res.render('adminLayout', { 
      user : req.user // get the user out of session and pass to template
    });

    userMem = req.user;
    console.log("userMem",userMem);
    console.log('profile/user');
    console.log(req.user.email);
  });

  //=====================================
  //LIST VIEW
  //=====================================
  app.get('/admin/articles/listview', isLoggedIn, function(req, res) {
      res.render('adminLayout', { 
      user : req.user // get the user out of session and pass to template
    });

    userMem = req.user;
  });

//=====================================
  //EDIT ARTICLE
  //=====================================
  app.get('/admin/articles/:id/edit', isLoggedIn, function(req, res) {
      res.render('adminLayout', { 
      user : req.user // get the user out of session and pass to template
    });

    userMem = req.user;
    console.log("userMem",userMem);
  });

//=====================================
  //NEW ARTICLE
  //=====================================
  app.get('/admin/articles/new', isLoggedIn, function(req, res) {
      res.render('adminLayout', { 
      user : req.user // get the user out of session and pass to template
    });

    userMem = req.user;
    console.log("userMem",userMem);
  });
  

 app.get('/partials/admin/templates/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/' + name);
  });

  app.get('/partials/admin/templates/archive/:name', function (req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/archive/' + name);
  });

  app.get('/partials/admin/templates/articles/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/articles/' + name);
  });

  app.get('/partials/admin/templates/categories/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/categories/' + name);
  });

  app.get('/partials/admin/templates/users/:name', function (req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/users/' + name);
  });

  
  app.get("/admin/api/user",isLoggedIn, function(req,res){
    var a = userMem;
    userMem = undefined;
    res.json(a);
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/admin/logout', function(req, res) {
    req.logout();
    res.redirect('/admin/login');
  });

//  app.get('/admin/logout', function (req, res){
//   req.session.destroy();
//      setTimeout(function() {
//    res.redirect('/admin/login');
//}, 4000);


  //req.session.destroy(function (err) {
  //  res.redirect('/admin/login'); //Inside a callback… bulletproof!
  //});
//});

   app.get('/*', function(req, res){
    res.render('layout');
   }); 


};

// route middleware to make sure
function isLoggedIn(req, res, next) {
console.log("req.isAuthenticated()",req.isAuthenticated());
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) 
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/admin/login');
}