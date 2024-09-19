function f1(){
    console.log("Hello World")
}

const g = f1()
console.log(g)

function f2(){
    return "Hello World"
}

console.log(f2())
console.log(f2.name)

const f3 = function() {return "Hello World"}

console.log(f3())

f2.s = "str"

console.log(f2.s)

f2.m1 = function() {console.log("M1")}

f2.m1()

console.log(typeof(f2))
console.log(f2 instanceof Function)

function f4(p1,p2,p3,p4){
    console.log("Start f4")
    console.log("p1 = " + p1)
    console.log("p2 = " + p2)
    console.log("p3 = " + p3)
    console.log("p4 = " + p4)
}

f4()
f4(1)
f4(1,2)
f4(1,2,3)
f4(1,2,3,4)
f4(1,2,3,4,5)

function f5(p1, ...rest){
    console.log("Start f5")
    console.log("p1 = " + p1)
    console.log("rest = " + rest.length)
    console.log("rest[0] = " + rest[0])
    console.log("rest[1] = " + rest[1])

}

f5()
f5(1)
f5(1,2)
f5(1,2,3)

const o = {}
o.s = "str"
o.f = function() {console.log("f was called")} 

function showProps(obj)
{
    for(let p in obj)
    {
        if(obj[p] instanceof Function){
            obj[p]()
        }else{
            console.log(p + "-" + obj[p])
        }
    }
}

showProps(o)

function executeAndPrint(a,b,f){
    const res = f(a,b)
    console.log(res)
}

executeAndPrint(2,3, function(a,b){return a + b})
executeAndPrint(2,3, function(a,b){return a - b})

executeAndPrint(2,3, (c,d) => c + d)
executeAndPrint(2,3, (a,b) => a - b)