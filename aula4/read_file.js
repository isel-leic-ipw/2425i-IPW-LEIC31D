import {readFile} from 'fs'

readFile("file12.txt", processData)

function processData(error, data){
    if(error) return console.log(error)
    console.log(data.toString())
}


