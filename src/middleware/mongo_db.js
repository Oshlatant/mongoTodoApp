const mongoose = require("mongoose");
const Todos = require(`${require.main.path}/models/todos.js`);

mongoose.connect('mongodb://localhost/todo_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const mongo_db_middleware = function(req, res, next){
    req.db = mongoose;
    req.models = {};
    req.models.Todos = Todos;

    next();
}

module.exports = mongo_db_middleware;