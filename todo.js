

var todo = angular.module('todoApp', []);

todo.controller( 'TodoCtrl', [ 
    '$scope',
    function( $scope) { 

    $scope.item = { text: "Get groceries from the store",
                    dueDate: new Date( 2016, 8, 7),
                    completed: false }

    $scope.show = function( thing ) {
      return thing;
    }

  }
]);



