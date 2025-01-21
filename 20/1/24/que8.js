let person ={
    personInfo: function(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
    }
};

let per = {name:"Hutesh", age:25};

console.log(person.personInfo.apply(per));