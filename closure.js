function outerFunction() {
  var outerVariable = "I am outside!";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

let message = outerFunction();
message(); // I am outside!