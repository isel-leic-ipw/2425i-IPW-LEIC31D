import data from './tasks-data.js'

function getTasks(req, resp){
    console.log(req.query)
    resp.json(data.getTasks())
}

function getTaskById(req, resp){
    console.log(req.params)
    resp.json(data.getTaskById(req.params.taskId))
}

function createTask(req, resp){
    console.log(req.body)
    
    resp.status(201).json(data.createTask(req.body.text))
}

export const webapi = {
    getTasks,
    getTaskById,
    createTask
}

export default webapi