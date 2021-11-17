export const render =(todoList, anchor)=>{
    anchor.innerHTML=null;
    todoList.map(function(todo){
        renderRow(anchor, todo);
    })
    
}
function renderRow(table, todo){
var row=table.insertRow(-1);
var idCell = row.insertCell(0);
var labelCell = row.insertCell(1);
var updateCell = row.insertCell(2);
var deleteCell = row.insertCell(3);


idCell.innerHTML = todo.id;
labelCell.innerHTML = todo.label;
updateCell.innerHTML = '<input type = "button"  id="'+todo.id+'" value="Delete"/>';
deleteCell.innerHTML= '<input type = "button"  id="'+todo.id+'" value="Update" />';
}
