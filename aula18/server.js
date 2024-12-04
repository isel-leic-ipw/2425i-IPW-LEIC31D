import express from 'express'

import {webApiFunction} from './tasks_webapi.js'
import {servicesFunction} from './tasks_service.js'
import tasksData from './tasks_data_mem.js'
//import tasksData from './tasks_data_elastic.js'
import {webUiFunction} from './task_webUi.js'

const tasksService =  servicesFunction(tasksData)
const tasksWebApi = webApiFunction(tasksService)
const tasksWebUi = webUiFunction(tasksService)

const app = express()

app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/api/tasks", tasksWebApi.getTasks)
app.get("/api/tasks/:taskId", tasksWebApi.getTaskById)
app.post("/api/tasks", tasksWebApi.createTask)

app.get("/",tasksWebUi.home)
app.get("/tasks", tasksWebUi.getTasks)
app.get("/tasks/:taskId", tasksWebUi.getTaskById)
app.post("/tasks", tasksWebUi.createTask)

app.get("/createTask", tasksWebUi.createTaskView)

app.listen(8080, ()=>console.log("Listening..."))