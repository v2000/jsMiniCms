
module.exports = function(app, passport) {
  // show the home page (will also have our login links)
  app.get('/admin', function(req, res) {
    //res.render('adminLayout');
    res.render('partials/admin/templates/login');
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res){
    var name = req.params.name;
  console.log("login", name);
  res.render('partials/admin/templates/login', { message: req.flash('loginMessage') });
}); // startpoint for admin users

 // process the login form
  app.post('/login', passport.authenticate('local-login', {
    //successRedirect : 'partials/admin/templates/articles/listview', // redirect to the secure profile section
    successRedirect : '/admin/articles/listview', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('partials/admin/templates/signup', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/admin/articles/listview', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // PROFILE SECTION =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  
  //app.get('/profile', isLoggedIn, function(req, res) {
  app.get('/admin/articles/listview', isLoggedIn, function(req, res) {
    //res.render('profile.jade', {
      res.render('partials/admin/templates/articles/listview', {
      user : req.user // get the user out of session and pass to template
    });
  });

  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}


//app.get('/admin', routes.adminIndex); // startpoint for admin users

//app.get('/partials/admin/templates/:name',routes.admin);
//app.get('/partials/admin/templates/archive/:name',routes.adminArchive);
//app.get('/partials/admin/templates/articles/:name',routes.adminArticles);
//app.get('/partials/admin/templates/categories/:name',routes.adminCategories);
//app.get('/partials/admin/templates/users/:name',routes.adminUsers);
