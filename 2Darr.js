let arr=[
    [1,2,3],[4,5,6],[7,8,9]
]
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
//     console.log()
// }

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(' ')); // Join the elements of each row with a space
}