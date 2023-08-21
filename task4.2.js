class Person {
    Name;
    Address;
    constructor(name, address) {
        this.Name = name;
        this.Address = address;
    }
    Person() {
        return `Name = ${this.Name} | Address = ${this.Address}`;
    }
    getName() {
        return `Name = ${this.Name}`;
    }
    getaddress() {
        return `Address = ${this.Address}`;
    }
    setaddress(address) {
        this.Address = address;
    }
    tostring() {
        return `[Name = ${this.Name} \n Address = ${this.Address}]`;
    }
}
class Staf extends Person {
    School;
    Pay;
    constructor(name, address, school, pay) {
        super(name, address);
        this.School = school;
        this.Pay = pay;
    }
    getschool() {
        return `School = ${this.School}`;
    }
    setschool(school) {
        this.School = school;
    }
    getpay() {
        return this.Pay;
    }
    setpay(pay) {
        this.Pay = pay;
    }
    toString() {
        return `[ ${this.getName()} \n  ${this.getaddress()} \n School = ${this.School} \n Pay = ${2000}]`;
    }
}
class Student extends Person {
    Program;
    Year;
    fee;
    constructor(name, address, program, year, fee) {
        super(name, address);
        this.Program = program;
        this.Year = year;
        this.fee = fee;
    }
    getprogram() {
        return `Program = ${this.Program}`;
    }
    setprogram(program) {
        this.Program = program;
    }
    getyear() {
        return this.Year;
    }
    setyear(year) {
        this.Year = year;
    }
    getfee() {
        return this.fee;
    }
    setfee(fee) {
        this.fee = fee;
    }
    ToString() {
        return `[  ${this.getName()} \n  ${this.getaddress()} \n  ${this.getprogram()} \n Year = ${this.getyear()} \n fee = ${this.getfee()}  ]`;
    }
}
const p1 = new Person('Galal', 'Mansoura');
console.log(p1.tostring());
console.log(p1.getName());
console.log(p1.getaddress());
p1.setaddress('Tanta');
console.log(p1.getaddress());
console.log("============================================");
const f1 = new Staf('Galal', 'Mansoura', 'askaria', 2000);
console.log(f1.toString());
console.log(f1.getName());
console.log(f1.getaddress());
console.log(f1.getschool());
console.log(f1.getpay());
f1.setschool('taha hessen');
console.log(f1.getschool());
f1.setpay(2500);
console.log(f1.getpay());
console.log("============================================");
const s1 = new Student('Galal', 'Mansoura', 'SWE', 2003, 5);
console.log(s1.ToString());
console.log(s1.getName());
console.log(s1.getaddress());
console.log(s1.getprogram());
s1.setprogram("AI");
console.log(s1.getprogram());
console.log(`Year = ${s1.getyear()}`);
s1.setyear(2000);
console.log(`Year = ${s1.getyear()}`);
console.log(`Fee = ${s1.getfee()}`);
s1.setfee(50);
console.log(`Fee = ${s1.getfee()}`);
