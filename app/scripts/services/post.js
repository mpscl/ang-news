'use strict';

app.factory('Post', function ($resource) {
  return $resource('https://sweltering-heat-2035.firebaseIO.com/posts/:id.json');
});
