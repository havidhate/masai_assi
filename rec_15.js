function fact(number){
    if(number<0) return 0;
    if(number===0) return 1;
    return number*fact(number-1);
}