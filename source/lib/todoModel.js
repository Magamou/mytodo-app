export const todoListAdd=function(todoList, todo){
     todoList.push(todo);
     return todoList;
}
export const todoListRemove=function(todoList, _id){
   todoList.filter(function(elem){
        return elem.id !== _id;
    });
    return todoList;
}
export const todoListUpdate=function(todoList, todo){
    todoList.map(function(elem){
        if(todo.id===elem.id){
            return todo;
        }
    });
    return todoList;
}

export const todoListSort=function(todoList){
    todoList.sort();
    return todoList;
}