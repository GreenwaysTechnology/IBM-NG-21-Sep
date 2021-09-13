//classes

class Employee {
    //instance variables
    id: number;
    firstName: string;
    lastName: string;
    salary: number;

    constructor(id: number = 1, firstName: string = "Subramanian", lastName: string = "Murugan", salary?: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    //instance methods
    calculateSalary(): number {
        return 100;
    }
}

let emp = null;
//safe navigation operator :  if there is null, null will be converted into string
//console.log(emp.id)
console.log(emp?.id);


//replace with alternate value incase undefined
console.log(emp?.id ? emp.id : 0)

//elvish operator
//if emp is null, replace with empty object
console.log('fallback ', emp ?? {})

emp = new Employee(677)
console.log(emp?.id ? emp.id : 0)


//safe naviation operator can work with undefined aswell
let emp1;
//elvish notation to replace default values or fallbacks
console.log(emp1?.id ?? 0);

//

function bar() {
    // let emp = new Employee(1000);
    let emp = null;
    return emp;
}
function fallback() {
    return 'Fallback'
}
console.log(bar()?.id ?? fallback())

function printEmployee(emp) {
    // if (emp !== null) {
    //     console.log(emp.name);
    // }
    console.log(emp?.id ?? fallback())
}

let emp2 = null;
printEmployee(emp2);

