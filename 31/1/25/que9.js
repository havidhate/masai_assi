function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.introduce = function(){
    console.log(`Hi, my name is ${this.name} and i am ${this.age} years old`);
}

function Employee(name,age,jobTitle){
    Person.call(this,name,age);
    this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work=function(){
    console.log(`${this.name} is working as a ${this.jobTitle}`);
}

const per = new Person("hutesh",26);
//console.log(per);
const emp = new Employee("Hutesh",26,"developer");
//console.log(emp);
per.introduce();
emp.introduce();
emp.work();


