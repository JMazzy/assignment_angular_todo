todo.factory( 'todoService', function() {
  var obj = {};

  var _items = [
    {text: "sample item", dueDate: new Date(), completed: false},
    {text: "completed item", dueDate: new Date(), completed: true}
  ];

  obj.getItems = function() {
    return _items;
  };

  obj.newItem = function(text, dueDate) {
    var item = { text: text,
                    dueDate: dueDate,
                    completed: false }
    _items.push(item);
  };

  obj.clearCompleted = function(  ) {
    _items.forEach( function(item) {
      if ( item.completed ) {
        var idx = _items.indexOf(item);
        obj.deleteItem(idx);
      }
    })
  };

  obj.deleteItem = function(index) {
    _items.splice(index, 1);
  };

  return obj;
})
