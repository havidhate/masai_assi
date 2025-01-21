function multiply(a,b){return a*b;}

let mul = multiply.apply( null, [3, 4] );
console.log(mul);

