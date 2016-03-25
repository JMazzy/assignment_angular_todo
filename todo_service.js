todo.factory( 'todoService', function() {
  obj = {};

  obj.items = [
    {text: "sample item", dueDate: new Date(), completed: false},
    {text: "completed item", dueDate: new Date(), completed: true}
  ];

  obj.text;
  obj.dueDate;
  obj.showCompleted = true;

  obj.newItem = function(text, dueDate) {
    var item = { text: text,
                    dueDate: dueDate,
                    completed: false }
    obj.items.push(item);
    console.log( obj.items )
    obj.text = "";
    obj.dueDate = "";
  };

  obj.clearCompleted = function(  ) {
    obj.items.forEach( function(item) {
      if ( item.completed ) {
        var idx = obj.items.indexOf(item);
        obj.deleteItem(idx);
      }
    })
  };

  obj.toggleCompleted = function(  ) {
    obj.showCompleted = !obj.showCompleted;
  };

  obj.deleteItem = function(index) {
    obj.items.splice(index, 1);
  };

  return obj;
})
