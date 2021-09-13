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

//instance creation
//emp is reference variable
//new is keyword
//Employee () -  constructor call
let emp = new Employee();
console.log(emp)

emp = new Employee(12,'Johhn','Mc',100000);
console.log(emp)



