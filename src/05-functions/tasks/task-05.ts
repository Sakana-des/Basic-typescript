/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
  return scores.sort()[scores.length-1]
}

function findLowestScore(scores: number[]): number {
  return scores.sort()[0]//cilik nak gedi
}

function calculateAverage(scores: number[]): number {
  return scores.reduce((t,n)=>t+n)/scores.length
}

function countPassedStudents(scores: number[]): number {
  let a = 0;
  scores.forEach(n=>{
    if (n>=75) a++;
  });
  return a
}
let all = [findHighestScore(scores),findLowestScore(scores),calculateAverage(scores),countPassedStudents(scores)]
console.log(all);