// app/routes.js
module.exports = function(app, passport) {

  // =====================================
  // HOME PAGE  ========
  // =====================================
  app.get('/', function(req, res){
  res.render('layout');
}); // startpoint for normal users


  
  app.get('/partials/site/:name', function (req, res) {
  var name = req.params.name;
  console.log("site name", name);
  res.render('partials/site/' + name);
});
  
  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/admin', function(req, res){
    var name = req.params.name;
  console.log("admin", name);
  res.render('partials/admin/templates/login', { message: req.flash('loginMessage') });
}); // startpoint for admin users


//  app.get('/login', function(req, res) {

    // render the page and pass in any flash data if it exists
//    res.render('login.ejs', { message: req.flash('loginMessage') });
//  });

 // process the login form
  app.post('/admin', passport.authenticate('local-login', {
    successRedirect : '/admin/articles/listview', // redirect to the secure profile section
    failureRedirect : 'partials/admin/templates/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // process the login form
//  app.post('/login', passport.authenticate('local-login', {
//    successRedirect : '/profile', // redirect to the secure profile section
//    failureRedirect : '/login', // redirect back to the signup page if there is an error
//    failureFlash : true // allow flash messages
//  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/signup', function(req, res) {

    // render the page and pass in any flash data if it exists
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });

  // process the signup form
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile', // redirect to the secure profile section
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

  // =====================================
  // PROFILE SECTION =========================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile.ejs', {
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