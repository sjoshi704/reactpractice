import { useState } from "react";

export function ToDoLists(){
    const [todolist, setToDoList]=useState([{id:1,name:"Task1"},{id:2,name:"Task2"},{id:3,name:"Task3"},{id:4,name:"Task4"},{id:3,name:"Task3"},{id:4,name:"Task4"},{id:5,name:"Task5"},{id:6,name:"Task6"},{id:7,name:"Task7"},{id:8,name:"Task8"}]);

const getToDo=()=>{
    const toDoElem=[];
    todolist.map((todos,index)=>{
        toDoElem.push(<div key={todos.id}><p> {todos.name}</p> <hr/> </div>
        )
    })
    return toDoElem;
}
    return <div>
        <h1 className="h3 text-primary"> ToDo List</h1>
        {getToDo()}
    </div>
}