//functions declaration
// function  sayGreet(){
//     //logic
//     console.log('Hello , How are you?')
// }
//function invocation
// sayGreet()

//implicit types
//name is arg
function sayGreet(name) {
    //logic
    console.log(`Hello ${name} , How are you?`)
}
//'Subramanian'
sayGreet('Subramanain')
sayGreet(10)
sayGreet(true)


//default args:es 6 feature
function add(a: number = 0, b: number = 0): number {
    return a + b;
}
console.log(add(10, 10))
// console.log(add(10,"####"))
console.log(add());

//optional parameter = ?
function setValues(name?: string, age: number = 18, city: string = "New Delhi"): string {
    return `${name} ${age} ${city}`
}
console.log(setValues())
console.log(setValues("Subramanian", 40, "Coimbatore"))

console.log(setValues(undefined, 40, "Coimbatore"))

function setFoo(a?: string, b: string = "b", c?: string) {
    return `${a} ${b} ${c}`
}
console.log(setFoo("hello", "hai"))
//////////////////////////////////////////////////////////////////////////////////
//Union Types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
}
printId(100)
printId("abc100")
// printId(true)

//what if i want to mainpulate the variable with union type
function printIdV2(id: number | string) {
    if (typeof id === "string") {
        // In this branch, id is of type 'string'
        console.log(id.toUpperCase());
    } else {
        // Here, id is of type 'number'
        console.log(id.toFixed());
    }
}
printIdV2(100)
printIdV2("xzabc")

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        // Here: 'x' is 'string'
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople("subramanian")
welcomePeople(['subu', 'ram'])
////////////////void

function doStuff(): void {
    console.log('void')
}
doStuff();