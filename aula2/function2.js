function f1(y){
    console.log("Start F1")

    function f2(x){
        console.log("F2 - x - " + x + "y - " + y)
    }

    console.log("End F1")
    return f2
}

const f3 = f1(123)
f3(1)
f3(2)

function x(m){
    return function(i){return i * m}
}

const y1 = x(10)
const y2 = x(20)

console.log(y1(1))
console.log(y2(2))