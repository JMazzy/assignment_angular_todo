var todo = angular.module('todoApp', []);

todo.controller( 'TodoCtrl', [
  '$scope', 'todoService',
  function( $scope, todoService ) {

    $scope.items = todoService.items;

    $scope.text = todoService.text;
    $scope.dueDate = todoService.dueDate;
    $scope.showCompleted = todoService.showCompleted;

    $scope.newItem = function(text, dueDate) {
      todoService.newItem(text,dueDate)
    };

    $scope.clearCompleted = function() {
      todoService.clearCompleted();
    }

    $scope.toggleCompleted = function(  ) {
      todoService.toggleCompleted();
    }

    $scope.deleteItem = function(index) {
      todoService.deleteItem(index);
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
