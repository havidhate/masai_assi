let arr = [1,2,3,4,5];
let arr2 =[6,7,8,9,10];

function filterEvenNumbers(arr){
    return arr.filter((num)=>num%2==0);
}
function sumOfArray(arr){
    return arr.reduce((acc,cur)=>acc+cur,0);
}
function sortAndConcat(arr1,arr2){
    return arr1.concat(arr2).sort((a,b)=>a-b);
}

console.log(filterEvenNumbers(arr));
console.log(sumOfArray(arr));
console.log(sortAndConcat(arr,arr2));