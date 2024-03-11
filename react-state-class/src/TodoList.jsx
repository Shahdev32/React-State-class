import {useState} from "react";




export default function TodoList(){

    let [todo,setTodo] = useState(["sample task"]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask=() => {
       setTodo([...todo,newTodo])
       setNewTodo("");
    };

    let updateTodoValue=(event) => {
        setNewTodo(event.target.value);
    };
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} ></input>
            <br></br>
            <button onClick={addNewTask}> Add task</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>

        <h4>TodoList</h4>
        <ul>
            {
                todo.map((todo)=> 
                <li>{todo }</li>
                )
            }
        </ul>
    </div>

    ); 

}
   