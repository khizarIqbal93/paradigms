class Employee {
    private name : string;
    since : Date;
    private salary: number;

    constructor(name: string, startDate: Date, salary: number) {
        this.name = name;
        this.since =  startDate;
        this.salary = salary;
    }

    getSalary() {
        console.log("NOT ENOUGH")
    }
}

class Consultant extends Employee {
    private specialistCapability : string;
    likesOOP : boolean;
    constructor(name: string, startDate:Date, salary : number, specialistCapability: string, likesOOP: boolean){
        super(name, startDate, salary)
        this.specialistCapability = specialistCapability;
        this.likesOOP = likesOOP;
    }
    givePayRise() {
        console.log("BOYYYY... GET THE HELL OUT OF HERE")
    }
    convertToOOP() {
        console.log("public static void main string args")
    }

}

const khizar = new Consultant('Khizar', new Date(2021, 9, 30), 100000, 'D&E', false);
