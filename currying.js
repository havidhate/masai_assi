function add(a){
    return function(b){
        if(b!==undefined){
            return add(a+b);
        }else{
            return a;
        }
    }
}
console.log(add(1)(2)(3)()); // 6