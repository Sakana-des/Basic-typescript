/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */
type student = {name:string, score:number}
const students:student[] = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];
let a = 0
let b = 0
let c = 0
let d = 0
let max = 0, min=9999, avg = 0, total = 0;
for(let i = 0; i < students.length;i++){
    if(students[i].score <= 100 && students[i].score >= 90)a++
    if(students[i].score <= 89 && students[i].score >= 80)b++
    if(students[i].score <= 79 && students[i].score >= 70)c++
    if(students[i].score <= 70)d++
    max = students[i].score>max?students[i].score:max;
    min = students[i].score<min?students[i].score:min;
    a++
    avg = total+=students[i].score / students.length
}
console.log(a,b,c,d,max,min,avg);
