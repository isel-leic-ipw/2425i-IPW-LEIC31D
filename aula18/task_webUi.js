const token = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

export function webUiFunction(services){

    function home(req, resp){
        resp.render("home")
    }


    async function getTasks(req, resp){
        console.log(req.query)
        const ts = await services.getTasks(token)
        resp.render("tasks-list",{tasks:ts})
    }


    async function getTaskById(req, resp){
        const t = await services.getTaskById(req.params.taskId,token)
        resp.render("task-details", {task:t})
    
    }
    async function createTaskView(req, resp){
        resp.render("create-task")
    
    }

    async function createTask(req, resp){
        const task = await services.createTask(req.body.text ,token)
        resp.status(303)
        resp.set('location',`/tasks/${task.id}`)
        resp.end()
    
    }
    return {
        home,
        getTasks,
        getTaskById,
        createTask,
        createTaskView
    }
    

}

