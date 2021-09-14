//decorators : 


//decorator

function Course(target: any) {
    //decoractor code
    Object.defineProperty(target.prototype, "subject", {
        value: 'Typescript'
    })
}

type StudentType = {
    firstName: string;
    lastName: string;
    subject?: string;
}

//decorator use
@Course
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
let student = new Student('Subramanian', 'Murugan') as StudentType;
console.log(`${student.firstName} ${student.lastName} ${student.subject}  `);