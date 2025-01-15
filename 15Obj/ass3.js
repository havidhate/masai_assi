const profile = {
    name: "Charlie",
    age: 29,
    address: { city: "San Francisco", zipcode: "94101" }
};

const updates = {
    age: 30,
    address: { zipcode: "94109", country: "USA" }
};

// Deep merge function
const deepMerge = (obj1, obj2) => {
    let merged = { ...obj1 };

    for (let key in obj2) {
        if (obj2[key] instanceof Object && key in obj1) {
            merged[key] = deepMerge(obj1[key], obj2[key]);
        } else {
            merged[key] = obj2[key];
        }
    }

    return merged;
};

// Perform deep merge
const result = deepMerge(profile, updates);
console.log(result);
//solution   