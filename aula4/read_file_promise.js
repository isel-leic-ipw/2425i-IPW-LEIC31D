//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

//pending: initial state, neither fulfilled nor rejected.
//fulfilled: meaning that the operation was completed successfully.
//rejected: meaning that the operation failed.

import fs from 'node:fs/promises'




function mainThen(){
    const readPromise = fs.readFile("file1.txt")
    readPromise
        .then(data => console.log(data.toString()))
        .catch(error => console.log("ERROR",error))
}

async function main(){
    try{
        const readPromise = fs.readFile("file1.txt")
        const data = await readPromise
        console.log(data)
    }catch(error){
        console.log("ERROR",error)
    }
}

    
console.log("DONE REALLY?")