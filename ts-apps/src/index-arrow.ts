//arrow function will reduce the code of function declaration

//function literal ; we can store function in a variable

//es 5 style
let hai = function () {
    console.log('hai')
};
hai();
//arrow style :es 6
hai = () => {
    console.log('hai')
};
hai();
//rules ; if function has only one line of body ; remove {}
hai = () => console.log('hai');
hai();
//parameters and arrow

let add = function (a: number, b: number):void {
    let c = a + b;
    console.log(c);
};
add(10, 10)
add = (a: number = 0, b: number = 0): void => {
    let c = a + b;
    console.log(c);
};
add(10, 10)
//return 
add = (a: number = 0, b: number = 0): number => {
    return a + b;
};
console.log(add(10, 10));

//only one line of return statement , we can remove {} and return statement
add = (a: number = 0, b: number = 0): number => a + b;
console.log(add(10, 10));