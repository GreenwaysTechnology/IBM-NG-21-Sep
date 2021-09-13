//classes

class Employee {
    //instance variables
    id: number = 1;
    firstName: string = "Subramanian";
    lastName: string = "Murugan";
    salary: number = 100;

    constructor() {
        console.log('constructor is called')
    }
    //instance methods
    calculateSalary(): number {
        return 100;
    }
}

//instance creation
//emp is reference variable
//new is keyword
//Employee () -  constructor call
let emp = new Employee();
console.log(emp)
console.log(emp.id,emp.calculateSalary())

//state initalizaiton
emp.id =1000;
emp.firstName = "John";
emp.lastName="Mc";
console.log(emp)


