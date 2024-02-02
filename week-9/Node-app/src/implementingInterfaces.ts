// Now the benefit of interfaces is that we can implement our classes by using the interfaces.
// now by using interfaces we are restricted to ue that properties or behavior in our class.
interface Person {
    name:string,
    age:number,
    greet(phrase:string):void   //greet is of type function having a parameter as phrase and no return type .
}

class Employee implements Person {
    name:string
    age:number

    constructor(n:string ,a:number){
        this.name=n;
        this.age=a;
    }

    greet(phrase:string){
        console.log(`${phrase}+${this.name}`)
    }
}

// creating an instance of employee class or simply object.
const e= new Employee("vishal",24)
e.greet(("welcome back"));

console.log(e.name);
console.log(e.age);