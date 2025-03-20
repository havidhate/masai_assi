const students = [
  { name: "Alice", subject: "Math", score: 85 },
  { name: "Bob", subject: "Math", score: 92 },
  { name: "Charlie", subject: "Science", score: 78 },
  { name: "David", subject: "Math", score: 88 },
  { name: "Eve", subject: "Science", score: 91 },
  { name: "Frank", subject: "Math", score: 74 },
  { name: "Grace", subject: "Science", score: 80 },
];

let names = students.map((name) => name.name);
console.log(names);

let scores = students.filter((ele) => ele.score >= 80);
console.log(scores);

let totalScore = students.reduce((accu, curr) => curr.score + accu, 0);
console.log(totalScore);

let highScore = students.reduce((accu, curr) => Math.max(accu, curr.score), 0);
console.log(highScore);

let st = students.sort((a, b) => a.score - b.score);
console.log(st);
