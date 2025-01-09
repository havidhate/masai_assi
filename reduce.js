function countCategories(categories) {
    // Step 1: Use reduce to count occurrences of each category
    const categoryCount = categories.reduce((acc, category) => {
      // If the category already exists in the accumulator, increment its count
      if (acc[category]) {
        acc[category]++;
      } else {
        // If the category doesn't exist yet, initialize it with count 1
        acc[category] = 1;
      }
      return acc;
    }, {});
  
    // Step 2: Extra Challenge: Sort categories by count in descending order
    const sortedCategories = Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])  // Sort by count (second element of each entry)
      .map(entry => entry[0]); // Extract just the category names after sorting
  
    // Return the sorted array of category names
    return sortedCategories;
  }
  
  // Example input
  const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
  
  // Call the function
  const sortedCategoryList = countCategories(categories);
  
  // Output the sorted category list
  console.log(sortedCategoryList);
  
  // Output the full category count object
  console.log(categoryCount);
  