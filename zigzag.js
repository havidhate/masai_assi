let arr=[
    [1,2,3],[4,5,6],[7,8,9]
]

for(let i=0;i<arr.length;i++){
    let row="";
    for(let j=0;j<arr[i].length;j++){
        if (i % 2 === 0) {
            row += arr[i][arr[i].length - 1 - j] + " " ; // Reverse row
        } else {
            row += arr[i][j] + " "; // Keep row as-is
        }
    }
    console.log(row.trim(" "));
}