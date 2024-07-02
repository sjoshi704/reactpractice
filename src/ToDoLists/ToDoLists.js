import { useState } from "react";

export function ToDoLists(){
    const [todos, setToDo]=useState([{id:1,name:"Task1"},{id:2,name:"Task2"},{id:3,name:"Task3"}]);
    const [text,SetText] =useState("task");



const getToDo=()=>{
    const toDoElem=[];
    todos.map((todos,index)=>{
        toDoElem.push(<div key={todos.id}><p> {todos.name}</p> <hr/> </div>
        )
    })
    return toDoElem;
}



const onInputChange=(e)=>{
    console.log('Input Changed=',e.target.value);
    SetText(e.target.value);
}
    return <div>
        <h1 className="h3 text-primary"> ToDo List</h1>
        <div className="col-md-12 row">
        <div className="col-md-4"> </div>
  <div className="col-md-6">
    <input type="text" className="form-control" value={text} onChange={onInputChange} placeholder="enter Todo" />
  </div>
  <div className="col-md-1">
    <button className="btn btn-success" onClick={()=>{
        // type 1
        // todos.push({id:todos.length+1,name:text});
        // console.log(todos);
        // setToDo([todos]);
        // type 2
        // setToDo([...todos],{id:todos.length+1,name:text});

        // type 3
        // const updatedToDo=[...todos];
        // updatedToDo.push({id:todos.length+1,name:text})
        // console.log(updatedToDo);   
        // setToDo(updatedToDo);


        // type 4 one line code
        if(text.length>1){
        setToDo([...todos,{id:todos.length+1,name:text}])
        }
    }}>Add</button>
  </div>
</div>

        {getToDo()}
    </div>
}