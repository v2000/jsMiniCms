//appAdmin.factory("ArticleAdminUser", function($resource, $http) {
appAdmin.factory("Article", function($resource, $http) {
  var resource = $resource("/api/articles/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

  return resource;
});

/*appAdmin.factory("ArticleAdminCategory", function($resource, $http) {
  var resource = $resource("/api/articles/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

  return resource;
});*/

appAdmin.factory("Category", function($resource, $http) {
  var resource = $resource("/api/categories/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
  return resource;
});

appAdmin.factory("user", function($resource, $http) {
    var resource = $resource("/api/users/:id", { id: "@_id" },
        {
            'create':  { method: 'POST' },
            'index':   { method: 'GET', isArray: true },
            'show':    { method: 'GET', isArray: false },
            'update':  { method: 'PUT' },
            'destroy': { method: 'DELETE' }
        }
    );

    return resource;
});

//appAdmin.factory("LoggedUser", function($resource, $http) {
//  var resource = $resource("/admin/api/user", {},
//    {
//      'show':   {  method: 'GET', isArray: false }
//    }
//  );
//  return resource;
//});


appAdmin.factory("ArticleUser", function($resource, $http) {
  var resource = $resource("/api/articles/user/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
    }
  );

  return resource;
});

appAdmin.factory("ArticleCategory", function($resource, $http) {
  var resource = $resource("/api/articles/category/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
    }
  );

  return resource;
});

appAdmin.factory('DataProvider', function ($http) {
  return $http.get('/admin/api/user');
});