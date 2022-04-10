class Employee {
    private name : string;
    since : Date;
    protected salary: number;

    constructor(name: string, startDate: Date, salary: number) {
        this.name = name;
        this.since =  startDate;
        this.salary = salary;
    }

    getSalary() {
        console.log("NOT ENOUGH")
    }
}

// Inheritance
class Consultant extends Employee {
    private specialistCapability : string;
    likesOOP : boolean;
    constructor(name: string, startDate:Date, salary : number, specialistCapability: string, likesOOP: boolean){
        super(name, startDate, salary)
        this.specialistCapability = specialistCapability;
        this.likesOOP = likesOOP;
    }
    // Encapsulation
    givePayRise(newPay : number) {
        if (newPay > 100000) {
            console.log("BOYYYY... GET THE HELL OUT OF HERE")
        } else {
            this.salary = newPay;
        }
    }
    convertToOOP() {
        console.log("ayo verbose syntax ain't even that bad")
        this.likesOOP = true;
    }
}

const khizar = new Consultant('Khizar', new Date(2021, 9, 30), 100000, 'D&E', false);

// Polymorphism 
console.log(khizar instanceof Consultant);
console.log(khizar instanceof Employee);