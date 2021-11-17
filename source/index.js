import { render } from "./lib/render";
import {todoListAdd, todoListRemove, todoListUpdate, todoListSort} from "./lib/todoModel"
//intercepter le input et la table dans deux variables
const myListView=document.querySelector('#myTodoList');
const addButton=document.querySelector('#addButton');
const toDoLabel=document.querySelector('#toDoLabel');

todoList=[];
//Ajouter un eventListener sur le bouton Add
addButton.addEventListener('click', function(e){
    let label=toDoLabel.value;
    todoListAdd(todoList, {id:todoList.length+1, label:label});
    render(todoList, myListView);
});
//Afficher toute la liste dans la table



