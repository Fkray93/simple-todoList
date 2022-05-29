const ObjectId = require('mongoose').Types.ObjectId;

const createTodo = async (req, res)=>{
    const todoModel = require('../../models/todo.model');
    if(!req.body.content) return res.status(400).json({ErrMessage : "the content is missing"});
    if(!req.body.date) return res.status(400).json({ErrMessage : "the date is missing"});

    const data = await todoModel.create({
        content : req.body.content,
        date : req.body.date,
        isDone : false
    })

    return res.status(200).json({data : [data]})
}

const getTodos = async (req, res)=>{
    const todoModel = require('../../models/todo.model');

    const data = await todoModel.find({});

    return res.status(200).json({data : data})
}

const deleteTodo = async (req, res)=>{
    if(!req.body.id) return res.status(400).json({ErrMessage : "the id is missing"});
    if(!ObjectId.isValid(req.body.id)) return res.status(404).json({ErrMessage : "task not found"});
    const todoModel = require('../../models/todo.model');

    const exist = await todoModel.findById(req.body.id);
    if(!exist) return res.status(404).json({ErrMessage : "Data not found"});

    await todoModel.findByIdAndDelete(req.body.id);

    return res.status(200).json({success : "todo has been successfully deleted"})
}

const checkTodo = async (req, res)=>{
    if(!req.body.id) return res.status(400).json({ErrMessage : "the id is missing"});
    if(!ObjectId.isValid(req.body.id)) return res.status(404).json({ErrMessage : "task not found"});
    const todoModel = require('../../models/todo.model');

    const todoData = await todoModel.findById(req.body.id);

    if(!todoData){
        return res.status(400).json({ErrMessage : "task not found"});
    }

    await todoModel.findByIdAndUpdate({_id : req.body.id}, {isDone : !todoData.isDone});

    return res.status(200).json({success : "todo has been successfully updated"})

}

module.exports = {createTodo, getTodos, deleteTodo, checkTodo};