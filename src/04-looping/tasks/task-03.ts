/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

const scores:number[] = [
82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
]
let pass = 0
let not = 0
let total = 0
let avg = 0
let avgscore = 0


for(let i = 0; i < scores.length; i++){
    const score = scores[i]
    let totalsc = total+=score
    avgscore = totalsc / i

    if(score <= 75){
        pass++
    }else{
        not++
    }
}
console.log(`Num pass student ${pass}`)
console.log(`Num notpass student ${not}`)
console.log(`total score ${total}`)
console.log(`avg score ${avgscore}`)
