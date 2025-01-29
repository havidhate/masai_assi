// Factory function to create an inventory item
function createInventoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem() {
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: $${this.price.toFixed(2)}`);
        }
    };
}

// Factory function to add a discount to an inventory item
function addItemDiscount(inventoryItem, discountPercent) {
    return {
        ...inventoryItem, // Spread the properties of inventoryItem
        discountPercent,
        discountedPrice: inventoryItem.price * (1 - discountPercent / 100),
        
        applyDiscount() {
            this.discountedPrice = this.price * (1 - this.discountPercent / 100);
            console.log(`After ${this.discountPercent}% discount, the price of ${this.name} is $${this.discountedPrice.toFixed(2)}`);
        }
    };
}

const item1 = createInventoryItem("Laptop", "Electronics", 1000);
const item2 = createInventoryItem("Running Shoes", "Footwear", 150);


item1.describeItem(); 
item2.describeItem(); 


const discountedItem1 = addItemDiscount(item1, 10);
const discountedItem2 = addItemDiscount(item2, 20);

discountedItem1.applyDiscount(); 
discountedItem2.applyDiscount(); 
