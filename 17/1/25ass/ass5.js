Input: [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
  ]
  
 /* Output: {
    "Electronics": 50000,   // Laptop needs 50 more units * $1000 per unit
    "Clothing": 2000,       // T-shirt needs 60 more units * $20 + Jeans needs 10 more units * $40
    "Accessories": 4500     // Watch needs 30 more units * $150
  }*/

  function calculateStockValue(arr){
    let obj = {};
    arr.forEach((item)=>{
        if((100-item.stock)>0){
        let total = (100-item.stock)*item.pricePerUnit;
        if(obj[item.category]){
            obj[item.category] += total;
        }
        else{
            obj[item.category] = total;
        }
    }
    });
    return obj;
}  
console.log(calculateStockValue([
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
  ]));