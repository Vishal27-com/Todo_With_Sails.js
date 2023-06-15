/**
 * TodoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Todo = require("../models/Todo");
const getTodo=(req,res)=>{
    Todo.find({}).exec(function(err, todos) {
        if (err) {
            return res.serverError(err);
        }
         return res.send(todos)
    });
}
const addTodo=async (req,res)=>{
try {
    const data=req.body;
   await Todo.create(data);
   return res.send("Posted");
} catch (error) {
    res.send(error.message)
}
}
const updateTodo=async (req,res)=>{
try {
    const data=req.body;
    const id=req.params.id;
   await Todo.update(
    {_id:id},data
   );
   return res.send("Updated");
} catch (error) {
    res.send(error.message)
}
}
const deleteTodo=async (req,res)=>{
try {
    const id=req.params.id;
   await Todo.destroy({_id:id})
   return res.send("Deleted");
} catch (error) {
    res.send(error.message)
}
}
module.exports = {getTodo,addTodo,updateTodo,deleteTodo}
