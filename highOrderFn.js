function processStudents(students) {
    // Step 1: Filter students who scored above 60 marks
    const filteredStudents = students.filter(student => student.marks > 60);
  
    // Step 2: Sort the filtered array by marks in descending order
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
  
    // Step 3: Map the sorted array to extract only the names of the students
    const sortedNames = sortedStudents.map(student => student.name);
  
    // Return the array of sorted names
    return sortedNames;
  }
  
  // Example input
  const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
  // Call the function
  const result = processStudents(students);
  
  // Output the result
  console.log(result);  // ["Charlie", "Bob"]
  