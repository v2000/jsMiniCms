
module.exports = function(app, passport) {
  // show the home page (will also have our login links)
  //app.get('/admin', routes.adminIndex); // startpoint for admin users
  app.get('/admin', function(req, res) {
    res.render('adminLayout');
  });
  //=====================================
  //PROFILE
  //=====================================
   //app.get('/profile', isLoggedIn, function(req, res) {
  app.get('/admin/profile', isLoggedIn, function(req, res) {
    //res.render('profile.jade', {
      res.render('partials/admin/templates/profile.jade', {
      user : req.user // get the user out of session and pass to template
    });
      
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/admin/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/admin/login', function(req, res){
  res.render('partials/admin/templates/login', { message: req.flash('loginMessage') });
}); // startpoint for admin users

 // process the login form
  app.post('/admin/login', passport.authenticate('local-login', {
    successRedirect : '/admin/profile', // redirect to the secure profile section
    failureRedirect : '/admin', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/admin/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('partials/admin/templates/signup', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/admin/signup', passport.authenticate('local-signup', {
    successRedirect : '/admin/profile', // redirect to the secure profile section
    failureRedirect : '/admin', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // LIST VIEW =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  
  //app.get('/admin/articles/listview', isLoggedIn, function (req, res) {
  //    res.render('partials/admin/templates/articles/listview', {
  //    user : req.user // get the user out of session and pass to template
  //  });
  //});
  


//app.get('/partials/admin/templates/:name',routes.admin);
 app.get('/partials/admin/templates/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/' + name);
  });

//app.get('/partials/admin/templates/archive/:name',routes.adminArchive);
//  app.get('/partials/admin/templates/archive/:name', function (req, res) {
//   var name = req.params.name;
//  console.log("admin name", name);
//  res.render('partials/admin/templates/archive/' + name);
//  });

//app.get('/partials/admin/templates/articles/:name',routes.adminArticles);
  app.get('/partials/admin/templates/articles/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/articles/' + name);
  });

//app.get('/partials/admin/templates/categories/:name',routes.adminCategories);
  app.get('/partials/admin/templates/categories/:name', function(req, res) {
   var name = req.params.name;
  console.log("admin name", name);
  res.render('partials/admin/templates/categories/' + name);
  });

//app.get('/partials/admin/templates/users/:name',routes.adminUsers);
//  app.get('/partials/admin/templates/users/:name', function (req, res) {
//   var name = req.params.name;
//  console.log("admin name", name);
//  res.render('partials/admin/templates/users/' + name);
//  });


};

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/admin');
}