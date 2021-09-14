//decorator

function Course(courseinfo: any) {
   
    return function (target:any) {
        //decoractor code
        Object.defineProperty(target.prototype, "info", {
            value: courseinfo
        })
    }
}

//decorator use
@Course({ id: 1, name: 'React', duration: 5 })
class Student {
    constructor(public firstName: string, public lastName: string) { }
}
let student = new Student('Subramanian', 'Murugan') as any;
console.log(`${student.firstName} ${student.lastName} ${student.info.name}  ${student.info.duration} `);