import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import todoApi from "./api/todo.api";
import Landing from "./components/landing/Landing.comp";
import { addTodo } from "./redux/Todo";

const App = ()=>{
    const dispatch = useDispatch();
    const {todo} = useSelector(state => state);

    const importTodos = async ()=>{
        const response = await todoApi.get('/todo');
        dispatch(addTodo(response.data.data));
    }
    useEffect(()=>{
        importTodos();
    }, [])

    useEffect(()=>{
        console.log("updated", todo.todoList);
    }, [todo.todoList])
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;