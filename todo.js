var todo = angular.module('todoApp', []);

todo.controller( 'TodoCtrl', [
  '$scope', 'todoService',
  function( $scope, todoService ) {

    $scope.items = todoService.getItems();

    $scope.text;
    $scope.dueDate;
    $scope.showCompleted = true;

    $scope.newItem = function(text, dueDate) {
      todoService.newItem(text,dueDate)
      $scope.text = "";
      $scope.dueDate = "";
    };

    $scope.clearCompleted = function() {
      todoService.clearCompleted();
    }

    $scope.deleteItem = function(index) {
      todoService.deleteItem(index);
    };

    $scope.toggleCompleted = function(  ) {
      $scope.showCompleted = $scope.showCompleted;
    };
  }
]);

todo.filter('filterByShowCompleted', function(  ){
  return function( items, showBool ) {

    if( showBool ) {
      return items;
    }

    var retItems = [];
    angular.forEach( items, function( item ){
      if( item.completed === false ){
        retItems.push( item );
      }
    });
    return retItems;
  }

});
