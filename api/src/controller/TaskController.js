const TaskModel = require('../model/TaskModel');

class TaskController { 
    
    async create(req, res){

        const task = new TaskModel(req.body);

        await task
        .save()
        .then(result => {
            return res.status(200).json(result);
        }).catch((err) => {
            return res.status(500).json(err);
        });
    }

}

module.exports = new TaskController();