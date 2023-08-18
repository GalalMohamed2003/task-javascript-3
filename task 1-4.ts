console.log("=============================================================")
class Employee {
    private id: number;
    private firstName: string;
    private lastName: string;
    private salary: number;

    constructor(id: number, firstName: string, lastName: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(salary: number): void {
        this.salary = salary;
    }

    getAnnualSalary(): number {
        return this.salary * 12;
    }

    raiseSalary(percent: number): void {
        this.salary += (this.salary * percent) / 100;
    }

    toString(): string {
        return `Employee[ Id = ${this.id} , Name = ${this.getName()} , Salary = ${this.salary}]`;
    }
}


//Example 
const emp1 = new Employee(8, 'Galal', 'Mohamed', 15000);
console.log(emp1.toString());

console.log(`ID => ${emp1.getId()}`);
console.log(`FirstName => ${emp1.getFirstName()}`);
console.log(`LastName => ${emp1.getLastName()}`);
console.log(`Salary => ${emp1.getSalary()}`);
console.log(`Annual Salary => ${emp1.getAnnualSalary()}`);
emp1.raiseSalary(10);
console.log(emp1.getSalary());
console.log(emp1.toString());