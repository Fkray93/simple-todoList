import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import todoApi from "../../api/todo.api";
import { checkTodo, deleteTodo } from "../../redux/Todo";
const TodoList = ()=>{
    const {todo} = useSelector(state => state)
    const todoList = todo.todoList;

    const dispatch = useDispatch();
    
    const deleteTask = async (taskId) =>{
        const deleteRequest = await todoApi.delete('/todo/delete',
        {
            data : {
                id : taskId,
            },
            headers: {'Content-Type': 'application/json'}
        });
        dispatch(deleteTodo({taskId : taskId}));
    }

    const checkToggle = async (taskId)=>{
        console.log(taskId);
        const deleteRequest = await todoApi.put('/todo/check',
        {
                id : taskId,
        });
        dispatch(checkTodo({taskId : taskId}));
    }
    return (
        <section className="taskList">
            <h2>Tasks</h2>

            <div id="tasks">

                {todoList.map((task)=>{
                    return (
                        <div className="task" key = {task._id} style = {task.isDone ? {backgroundColor: 'gray'} : {backgroundColor: ''}}>
                            <div className="content">
                                <input type="text" className="text" value= {task.content} readOnly style = {task.isDone ? {textDecoration: 'line-through'} : {textDecoration: ''}}/>
                            </div>
                            <div className="actions">
                                <button className="edit" onClick={(e)=>checkToggle(task._id)}>{task.isDone ? 'Undo' : 'Done'}</button>
                                <button className="delete" task-id = {task._id}  onClick = {(e)=>deleteTask(e.target.getAttribute('task-id'))}>Delete</button>
                            </div>
                        </div>
                    )
                })}


            </div>
        </section>
    )

}

export default TodoList;