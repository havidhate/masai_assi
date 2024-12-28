// let arr = {1,2,3,4,5,6,7};
// arr[3]=arr[3]+2;
// for(let i=0;i<7;i++){
// console.log(arr[i]);
// }

// let arr = {1,2,3,4,5};
// arr.unshift(8);
// arr.pop();
// for(let i=0;i<5;i++){
// consolelog(arr[i]);
// }

// let arr = {1,2,3,4,5,6,7,8,9,10};
// for(let i=0;i<10;i++){
// if(arr[i]>=90){arr[i]=90;}
// else if(arr[i]<40){arr[i]+20;}
// else if(arr[i]>=50){console.log(arr[i]);}
// }

// let arr ={1,2,3,4,5};
// arr.shift();
// arr.unshift(99);
// arr.unshift(200);
// arr[4]=542;
// console.log(arr);

// function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    
//     const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
//     const numbers = "0123456789";
//     const specialChars = "@#$%&*!";

    
//     let charPool = upperCaseLetters + lowerCaseLetters;

//     if (includeNumbers) {
//         charPool += numbers;
//     }
//     if (includeSpecialChars) {
//         charPool += specialChars;
//     }

    
//     let password = "";
//     password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]; // At least one uppercase letter
//     if (includeNumbers) {
//         password += numbers[Math.floor(Math.random() * numbers.length)]; // At least one number
//     }
//     if (includeSpecialChars) {
//         password += specialChars[Math.floor(Math.random() * specialChars.length)]; // At least one special character
//     }

//     for (let i = password.length; i < length; i++) {
//         password += charPool[Math.floor(Math.random() * charPool.length)];
//     }

    
//     password = password.split("").sort(() => Math.random() - 0.5).join("");

//     return password;
// }

let base=5;
let height=5;

function area(base,height){
    console.log(base*height*0.5);
}
area(5,4);



