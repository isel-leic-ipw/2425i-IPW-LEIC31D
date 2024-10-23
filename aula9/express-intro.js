import express from 'express'

let nextId = 3
const students = [
    {id : 1, name : "Filipe", email : "ff@mail.pt"},
    {id : 2, name : "Joao", email : "jj@mail.pt"}
]


const app = express()

app.use(express.json())

app.get("/", rootHandler)
app.get("/students", getStudents)
app.get("/students/:id", getStudentsById)
app.post("/students", postStudent)

app.listen("9000", ()=>console.log("LISTENING..."))

function postStudent(request, response){
    console.log(request.method)
    console.log(request.path)
    console.log(request.query)
    console.log(request.body.name)
    response
        .status(201)
        .json(request.body)
}


function getStudentsById(request, response){
    console.log(request.method)
    console.log(request.path)
    console.log(request.query)
    console.log(request.params.id)

    response.json("Student by id")
}

function getStudents(request, response){
    console.log(request.method)
    console.log(request.path)
    console.log(request.query)

    response.json("Students")
}

function rootHandler(request, response){
    console.log("Received Request")
    console.log(request.method)
    console.log(request.path)
    console.log(request.query)

    response.send("Received")
}

