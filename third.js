let price;

function discount(price){
    if(price>20){
        price=price-0.2*price;
    }
    console.log(price);
}

discount(50);