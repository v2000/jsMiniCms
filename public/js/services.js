app.factory("Article", function($resource, $http) {
  var resource = $resource("/api/articles/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false }

    }
  );

  return resource;
});


app.factory("Category", function($resource, $http) {
  var resource = $resource("/api/categories/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false }

    }
  );

  return resource;
});

appAdmin.factory("User", function($resource, $http) {
    var resource = $resource("/api/user/:id", { id: "@_id" },
        {

            'index':   { method: 'GET', isArray: true },
            'show':    { method: 'GET', isArray: false }

        }
    );

    return resource;
});
