/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
type student={student:string, submitted:boolean, score:number}
const submissions:student[] = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];
function calculateTotalStudent(submission: student[]){
    return submission.length;
}
function calculateSubmitted(submission: student[]){
    return submission.filter(student=>student.submitted).length
}
function calculateMissingAssignment(submission: student[]){
    return submission.filter(sub=>!sub.submitted).length
}
function passedStudent(submission: student[]){
    let a:string[] = []
    for(let i = 0; i < submission.length; i++){
        if(submission[i].score <= 75)a.push(submission[i].student)
    }
    return a
}
function studentReqRevision(submission:student[]){
    return submission
        .filter(p => p.score >= 75)
        .map(p => p.student)
}
function calculateAvgScore(submission:student[]){
    const total = submission.reduce((sum,p)=> sum + p.score,0);
    return total / submission.length
}


console.log(calculateTotalStudent(submissions));
console.log(calculateSubmitted(submissions));
console.log(calculateMissingAssignment(submissions));
console.log(passedStudent(submissions));
console.log(studentReqRevision(submissions));
console.log(calculateAvgScore(submissions));
