var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.age = age;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person = new Person('Rafael', 'Casachi', 29);
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, firstName, middleName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.getFullName = function () {
        // const nameSegments: Array<string> = super.getFullName().split(' ');
        // nameSegments.splice(1, 0, this.middleName);
        // const fullName = nameSegments.join(' ');
        // return fullName;
        return this.firstName + " " + this.middleName + " " + this.lastName;
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'Rafael', 'Alessandro', 'Casachi', 29);
console.log(manager.getFullName());
var managerOne = new Employee(2, 'John', 'Nice', 'Doe', 29);
console.log(managerOne.employeeId);
managerOne.employeeId = 20;
console.log(managerOne.employeeId);
