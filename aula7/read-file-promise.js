const readPromise = fs.readFile("file1.txt")

readPromise
    .then(data => {
        console.log(data.toString())
        //return Promise.reject("rejected")
        //return Promise.resolve(4)
    })
    .then(a => console.log(a))
    .catch(error => console.log("ERROR",error))
    .then(a => console.log(a))

console.log("Done")