

var todo = angular.module('todoApp', []);

todo.controller( 'TodoCtrl', [
    '$scope',
    function( $scope) {

      $scope.items = [ {text: "sample item", dueDate: new Date(), completed: false}, {text: "completed item", dueDate: new Date(), completed: true} ];
      $scope.text;
      $scope.dueDate;

      $scope.newItem = function(text, dueDate) {
        var item = { text: text,
                        dueDate: dueDate,
                        completed: false }
        $scope.items.push(item);
        $scope.text = "";
        $scope.dueDate = "";
      };

    $scope.show = function( thing ) {
      return thing;
    }

  }
]);
