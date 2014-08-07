appSite.factory("Article", function($resource, $http) {
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


appSite.factory("Category", function($resource, $http) {
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

appSite.factory("user", function($resource, $http) {
    var resource = $resource("/api/user/:id", { id: "@_id" },
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



appSite.factory("ArticleCategory", function($resource, $http) {
  var resource = $resource("/api/articles/category/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
    }
  );

  return resource;
});
