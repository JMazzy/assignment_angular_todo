var todo = angular.module('todoApp', []);

todo.controller( 'TodoCtrl', [
    '$scope',
    function( $scope) {

      $scope.items = [
        {text: "sample item", dueDate: new Date(), completed: false},
        {text: "completed item", dueDate: new Date(), completed: true}
      ];

      $scope.text;
      $scope.dueDate;
      $scope.showCompleted = true;

      $scope.newItem = function(text, dueDate) {
        var item = { text: text,
                        dueDate: dueDate,
                        completed: false }
        $scope.items.push(item);
        console.log( $scope.items )
        $scope.text = "";
        $scope.dueDate = "";
      };

    $scope.clearCompleted = function(  ) {
      $scope.items = $scope.items.filter( function(item) {
        return !item.completed;
      });
    }

    $scope.toggleCompleted = function(  ) {
      $scope.showCompleted = !$scope.showCompleted;
    }


    $scope.deleteItem = function(index) {
      console.log("deleting")
      $scope.items.splice(index, 1);
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
