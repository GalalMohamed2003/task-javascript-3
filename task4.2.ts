class Person {
    private Name: string;
    private Address: string;

    constructor(name: string, address: string) {
        this.Name = name;
        this.Address = address;
    }
    public Person() {
        return `Name = ${this.Name} | Address = ${this.Address}`
    }
    getName(): string {
        return `Name = ${this.Name}`
    }

    getaddress(): string {
        return `Address = ${this.Address}`
    }
    setaddress(address: string): void {
        this.Address = address;
    }
    tostring(): string {
        return `[Name = ${this.Name} \n Address = ${this.Address}]`
    }
}

class Staf extends Person {
    private School: string;
    private Pay: number;

    constructor(name: string, address: string, school: string, pay: number) {
        super(name, address);
        this.School = school;
        this.Pay = pay;
    }
    getschool(): string {
        return `School = ${this.School}`
    }

    setschool(school: string): void {
        this.School = school;
    }

    getpay(): number {
        return this.Pay
    }

    setpay(pay: number): void {
        this.Pay = pay;
    }

    toString(): string {
        return `[ ${this.getName()} \n  ${this.getaddress()} \n School = ${this.School} \n Pay = ${2000}]`
    }
}

class Student extends Person {
    private Program: string;
    private Year: number;
    private fee: number;

    constructor(name: string, address: string, program: string, year: number, fee: number) {
        super(name, address)
        this.Program = program;
        this.Year = year;
        this.fee = fee;
    }

    getprogram(): string {
        return `Program = ${this.Program}`
    }
    setprogram(program: string): void {
        this.Program = program;
    }
    getyear(): number {
        return this.Year
    }
    setyear(year: number): void {
        this.Year = year;
    }
    getfee(): number {
        return this.fee
    }

    setfee(fee: number): void {
        this.fee = fee;
    }

    ToString(): string {
        return `[  ${this.getName()} \n  ${this.getaddress()} \n  ${this.getprogram()} \n Year = ${this.getyear()} \n fee = ${this.getfee()}  ]`
    }
}


const p1 = new Person('Galal', 'Mansoura');
console.log(p1.tostring())
console.log(p1.getName())
console.log(p1.getaddress())
p1.setaddress('Tanta')
console.log(p1.getaddress())


console.log("============================================")

const f1 = new Staf('Galal', 'Mansoura', 'askaria', 2000)
console.log(f1.toString())
console.log(f1.getName())
console.log(f1.getaddress())
console.log(f1.getschool())
console.log(f1.getpay())
f1.setschool('taha hessen')
console.log(f1.getschool())
f1.setpay(2500)
console.log(f1.getpay())

console.log("============================================")

const s1 =new Student('Galal', 'Mansoura','SWE',2003,5)
console.log(s1.ToString())
console.log(s1.getName())
console.log(s1.getaddress())

console.log(s1.getprogram())
s1.setprogram("AI")
console.log(s1.getprogram())

console.log(`Year = ${s1.getyear()}`)
s1.setyear(2000)
console.log(`Year = ${s1.getyear()}`)

console.log(`Fee = ${s1.getfee()}`)
s1.setfee(50)
console.log(`Fee = ${s1.getfee()}`)
