import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import todoApi from "../../api/todo.api";
import { addTodo } from "../../redux/Todo";

const Header = () =>{
    const dispatch = useDispatch();
    const [contentInput, setContentInput] = useState([]);

    const newTodo = async (e) =>{
        e.preventDefault();
        console.log("written", contentInput);
        const response = await todoApi.post('/todo/new', 
        {
            content : contentInput.content, 
            date : contentInput.date,
        },
        {
            headers: {'Content-Type': 'application/json'}
        });
        console.log("hejdsdsd-->", response);

        dispatch(addTodo(response.data.data))

    }

    // useEffect(()=>{
    //     dispatch(addTodo(response.data.data))
    // }, [uploadedData])
    return(
        <header>
            <h1>Daily Task List</h1>
            <form id="newTaskField" onSubmit={newTodo}>
                <input type="text" id="addingTask" placeholder="Add a task..." onChange={(event)=>setContentInput({content : event.target.value, date : "idag"})}/>
                <input type="submit" id="addTaskInput" value="Add a Task" />
            </form>
        </header>
    )
}

export default Header;