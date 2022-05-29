import {createSlice } from '@reduxjs/toolkit';


export const TodoSlice = createSlice({
    name : 'todoList',
    initialState : {
        todoList : []
    },

    reducers : {
        addTodo : (state, action) =>{
            for(let i = 0; action.payload.length > i; i++){
                state.todoList.push(action.payload[i]);
            }
        },
        deleteTodo : (state, action) =>{
                state.todoList.splice(state.todoList.findIndex((arrow) => arrow._id === action.payload.taskId), 1);
        },
        checkTodo : (state, action) =>{
            console.log("check");
            const index = state.todoList.findIndex((arrow) => arrow._id === action.payload.taskId);
            state.todoList[index].isDone = !state.todoList[index].isDone;
        },
    }
})

export const {addTodo, deleteTodo, checkTodo} = TodoSlice.actions;
export default TodoSlice.reducer;