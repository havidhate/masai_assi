// let products = {
//     items: [
//         {name: 'Apple', type: 'Fruit', quantity: 20, price: 2},
//         {name: 'Carrot', type: 'Vegetable', quantity: 50, price: 1},
//         {name: 'Orange', type: 'Fruit', quantity: 30, price: 3},
//         {name: 'Potato', type: 'Vegetable', quantity: 10, price: 2},
//         {name: 'Banana', type: 'Fruit', quantity: 40, price: 2}
//     ],
//     filter: function(type){
//         return this.items.map(item => item.type === type);
//     }
// }
function processProducts(products) {
    
    const productNames = products.map(product => product.name);
  

    products.forEach(product => {
      if (product.price > 50) {
        console.log(`${product.name} is above $50`);
      } else {
        console.log(`${product.name} is below $50`);
      }
    });
  }
  

  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  processProducts(products);