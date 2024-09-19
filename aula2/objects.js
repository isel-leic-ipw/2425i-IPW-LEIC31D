const std1 = {studentName : "Joao", number : 123}

console.log(std1)

std1.email = "joao@isel.pt"

console.log(std1)

delete std1.number

console.log(std1)

function createStudent(name, number)
{
    const std = {}
    std.studentName=name
    std.studentNumber=number 
    return std
}

const std2 = createStudent("Filipe",123)
const std3 = createStudent("Luis",145)

std3.x=12344

console.log(std2)
console.log(std3)

console.log(std3.studentNumber)
console.log(std3["studentNumber"])

function showProps(obj)
{
    for(let p in obj)
    {
        console.log(p + "-" + obj[p])
    }
}

showProps(std2)