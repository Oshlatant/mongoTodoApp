const express = require("express");
const { response_text } = require(`${require.main.path}/utils.js`);

const router = express.Router();

router.get("/todos/:id", function(req, res){
    //response the todo associated with param id
    const { params: {id}, models: {Todos} } = req;

    Todos.findById(id, (err, todo) => {
        res.json(todo);
    });
});

router.patch("/todos/:id", function(req, res){
    const { params: {id}, models: {Todos}, body: {checked} } = req; //req.params.id, ..., req.body, etc...
    
    Todos.findById(id, (err, todo)=>{
        todo.checked = checked;
        todo.save((err)=>{
            res.json(todo);
        });
    });
});

router.delete("/todos/:id", function(req, res){
    //delete the todo associated with param id
    const { params: {id}, models: {Todos} } = req;

    Todos.findByIdAndDelete(id, (err)=>{
        if(err){
            response_text(res, "Todo not found...", 404);
            return
        }
        res.end();
    });
});

router.get("/todos", function(req, res){
    //response all todos in one object
    const { Todos } = req.models;

    Todos.find({},(err, docs)=> {
        res.json(docs);
    });

});

router.post("/todos", function(req, res){
    //write in DB an todo from request querys: key
    const { body, models: {Todos} } = req;
    
    const todo = new Todos(body);
    
    todo.save(err =>{
        res.json(todo);
    });
});


module.exports = router;