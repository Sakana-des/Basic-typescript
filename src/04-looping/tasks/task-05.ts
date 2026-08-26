/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let gdwin = 0
let smwin = 0
let bwin = 0
let nwin = 0
let total = 0

for(let i = 0 ; i < scores.length; i++ ){
    const score = scores[i]
    let a = 0
    let b = 0
    let c = 0
    let d = 0
    if(score >= 95){
        gdwin++
    }else if(score < 95 && score > 84){
        smwin++
    }else if(score < 85 && score > 74){
        bwin++
    }else if(score <= 75){
        nwin++
    }
    a = c+=score
    d++
    total = a / d
}
console.log(`Gold Medals {${gdwin}}`)
console.log(`Silver Medals {${smwin}}`)
console.log(`Bronze Medals {${bwin}}`)
console.log(`No Medals {${nwin}}`)
console.log(total)