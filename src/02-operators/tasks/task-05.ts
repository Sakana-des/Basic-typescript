/**
 * A university is selecting students for a full scholarship.
 * A student will receive the scholarship only if all of the following requirements are satisfied:
 * - GPA is at least 3.75
 * - Family monthly income is less than Rp5,000,000
 * - The student has participated in at least 3 competitions
 * - The student has no disciplinary violations
 * - The student has completed all administrative documents.
 * 
 * The admissions office receives the following student information.
 * | Information             | Value      |
 * | ----------------------- | ---------- |
 * | Student Name            | Alya Putri |
 * | GPA                     | 3.89       |
 * | Family Income           | 4200000    |
 * | Competition Count       | 4          |
 * | Has Disciplinary Record | No         |
 * | Documents Complete      | Yes        |
 * 
 * If the student qualifies:
 *  - Scholarship Amount = Rp12,000,000
 * 
 * Otherwise:
 *  - Scholarship Amount = Rp0
 * 
 * Finally, the system should also calculate how much funding remains if the 
 * university has a total scholarship budget of Rp500,000,000.
 * 
 * Task:
 * - Evaluate every requirement using comparison operators.
 * - Combine all conditions using logical operators.
 * - Determine the scholarship amount using the ternary operator.
 * - Calculate the remaining scholarship budget.
 * - Display whether the student is accepted.
 */
const budget:number = 500000000;
const bea:number = 12000000

const GPA:number = 3.89;
const reqGPA = GPA >= 3.75;
console.log("===GPA===")
console.log(`${GPA} hasil ${reqGPA? "Pass" : "Fail"}`)

const Fincome:number = 5000000;
const reqFincome = Fincome < 5000000;
console.log("===Fincome===")
console.log(`${Fincome} hasil ${reqFincome? "Pass" : "Fail"}`);

const Competition:number = 4;
const reqComp = Competition >= 3;
console.log("===Competition===")
console.log(`${Competition} hasil ${reqComp? "Pass" : "Fail"}`);

const Disciplinary:boolean = true;
console.log("===Disciplinary===")
console.log(`${Disciplinary} hasil ${Disciplinary? "Pass" : "Fail"}`);

const Documents:boolean = true;
console.log("===Document===")
console.log(`${Documents} hasil ${Documents? "Pass" : "Fail"}`);

const ScholarshipAmount = reqGPA && reqFincome && reqComp && Disciplinary && Documents ? "12000000" : "0" ;
console.log("Apakah Lulus? ", reqGPA && reqFincome && reqComp && Disciplinary && Documents? "Lulus" : "TIdak")
console.log("Jumlah didapat dari beasiswa", ScholarshipAmount)
