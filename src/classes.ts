class Person {
    // firstName: string;
    // lastName: string;
    // age: number;

    constructor(
        protected firstName: string,
        protected lastName: string,
        private age: number
    ) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person: Person = new Person('Rafael', 'Casachi', 29);
console.log(person.getFullName());

class Employee extends Person {

    get employeeId(): number {
        return this.id;
    }

    set employeeId(employeeId: number) {
        this.id = employeeId;
    }

    constructor(
        private id: number,
        firstName: string,
        private middleName: string,
        lastName: string,
        age: number
    ){
        super(firstName, lastName, age);
    }

    getFullName(): string {
        // const nameSegments: Array<string> = super.getFullName().split(' ');
        // nameSegments.splice(1, 0, this.middleName);
        // const fullName = nameSegments.join(' ');
        // return fullName;
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

const manager: Person = new Employee(1, 'Rafael', 'Alessandro', 'Casachi', 29);
console.log(manager.getFullName());

const managerOne: Employee = new Employee(2, 'John', 'Nice', 'Doe', 29);
console.log(managerOne.employeeId);
managerOne.employeeId = 20;
console.log(managerOne.employeeId);