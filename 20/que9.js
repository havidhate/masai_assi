function setTimeoutGreeting(obj) {
    setTimeout(() => {
        console.log(`Hello, ${obj.name}`);
    }, 1000);
}

const person = { name: "Alice" };
setTimeoutGreeting(person);

// After 1 second, output: "Hello, Alice"
