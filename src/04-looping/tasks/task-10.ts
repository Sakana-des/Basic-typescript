/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */
type submit = {student:string, submitted:boolean, score:number}
const submissions:submit[] = [
    { student: "Alya", submitted: true, score: 92 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 78 },
    { student: "Dimas", submitted: true, score: 65 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 84 },
    { student: "Gita", submitted: true, score: 90 },
    { student: "Hana", submitted: true, score: 73 }
];
let temp = 0
let subm = 0
let notsubm = 0
let pass = 0
let revise = 0
let usernb:string[] = []
let userrv:string[] = []
let avg = 0

for(let i = 0; i < submissions.length; i++){
    if(submissions[i].submitted)subm++
    if(!submissions[i].submitted)notsubm++
    if(submissions[i].score >= 75)pass++
    if(submissions[i].score < 75)revise++
    if(!submissions[i].submitted)usernb.push(submissions[i].student)
    if(submissions[i].score < 75)userrv.push(submissions[i].student)
    avg = temp+=submissions[i].score / submissions.length
}
console.log(subm, notsubm, pass, revise, usernb, userrv,  avg);