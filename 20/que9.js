function setTimeoutGreeting(obj) {
        const greet = function() {
        console.log(`Hello, ${this.name}`);
    }.bind(obj);
    setTimeout(greet, 1000);
}
const person = { name: "Alice" };
setTimeoutGreeting(person); 

