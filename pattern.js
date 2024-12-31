let n=5;

for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n;j++){
        if(i==0 || i==(n-1)){
            row = row + "*"+" ";
        }
        else{
            row= '*'+" ";
        }
    }
    console.log(row.trim());
}