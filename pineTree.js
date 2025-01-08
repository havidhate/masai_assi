// for(let i=0; i<5; i++) {
//   let spaces = " ".repeat(5-i);
//   let stars = "*".repeat(i*2+1);
//   console.log(spaces + stars);
// }
// console.log("     |    ");

for(let i=0;i<5;i++){
    let row="";
    for(let j=0;j<5-i;j++){
        row=row+" ";
    }
    for(let k=0;k<(i*2+1);k++){
        row=row+"*";
    }
    console.log(row);
}
console.log("     |    ");