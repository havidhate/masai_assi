let createCounter = function(){
    let count=0;
    return {
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;
        },
        getCount: function(){
            return count;
        }
    }
}

const counter = createCounter();

console.log(counter.getCount());
console.log(counter.increment());
console.log(counter.getCount());