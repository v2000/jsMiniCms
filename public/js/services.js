app00.factory("Article", function($resource, $http) {
  var resource = $resource("/api/articles/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false }

    }
  );

  return resource;
});


app00.factory("Category", function($resource, $http) {
  var resource = $resource("/api/categories/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false }

    }
  );

  return resource;
});

app00.factory("user", function($resource, $http) {
    var resource = $resource("/api/user/:id", { id: "@_id" },
        {

            'index':   { method: 'GET', isArray: true },
            'show':    { method: 'GET', isArray: false }

        }
    );

    return resource;
});

app00.factory("ArticleCategory", function($resource, $http) {
  var resource = $resource("/api/articles/category/:id", { id: "@_id" },
    {
      'index':   { method: 'GET', isArray: true },
    }
  );

  return resource;
});
