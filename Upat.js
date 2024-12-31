let arr=[[1,2,3],[4,5,6],[7,8,9]];

let n = arr.length; // Assuming the input is a square matrix
    let res = [];

    // Step 1: Traverse up the first column
    for (let i = n - 1; i >= 0; i--) {
        res.push(arr[i][0]);
    }

    // Step 2: Traverse across the top row (excluding the first element, already added)
    for (let j = 1; j < n; j++) {
        res.push(arr[0][j]);
    }

    // Step 3: Traverse down the last column (excluding the first and last elements, already added)
    for (let i = 1; i < n; i++) {
        res.push(arr[i][n - 1]);
    }
console.log(res.join(" "));