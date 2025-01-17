Input: [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
  ]
  
  Output: [
    { name: "David", performance: "Excellent" },
    { name: "Alice", performance: "Excellent" },
    { name: "Charlie", performance: "Good" }
  ]

  function getPerfomamce(arr){
    return arr.filter((obj)=>obj.tasksCompleted>5).sort((a,b)=>b.rating-a.rating).map((obj)=>{
        if(obj.rating>=4.5){
            return {name:obj.name,performance:"Excellent"};
        }
        else{
            return {name:obj.name,performance:"Good"};
        }
        });
    }

    console.log(getPerfomamce([
        { name: "Alice", tasksCompleted: 8, rating: 4.7 },
        { name: "Bob", tasksCompleted: 4, rating: 4.0 },
        { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
        { name: "David", tasksCompleted: 10, rating: 4.9 },
        { name: "Eve", tasksCompleted: 7, rating: 2.8 }
      ])        );