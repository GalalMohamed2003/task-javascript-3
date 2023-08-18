console.log("=============================================================");
var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        this.salary += (this.salary * percent) / 100;
    };
    Employee.prototype.toString = function () {
        return "Employee[ Id = ".concat(this.id, " , Name = ").concat(this.getName(), " , Salary = ").concat(this.salary, "]");
    };
    return Employee;
}());
//Example 
var emp1 = new Employee(8, 'Galal', 'Mohamed', 15000);
console.log(emp1.toString());
console.log("ID => ".concat(emp1.getId()));
console.log("FirstName => ".concat(emp1.getFirstName()));
console.log("LastName => ".concat(emp1.getLastName()));
console.log("Salary => ".concat(emp1.getSalary()));
console.log("Annual Salary => ".concat(emp1.getAnnualSalary()));
emp1.raiseSalary(10);
console.log(emp1.getSalary());
console.log(emp1.toString());
