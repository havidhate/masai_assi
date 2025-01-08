let h=4;
let w=5;

for(let i=0;i<h;i++){
    let row="";
    for(let j=0;j<w;j++){
        if(i%2==0){
            row=row+"[] "
        }
        else{
            row=row+" []"
        }
    }
    console.log(row);
}