/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
type student={name:string, present: boolean}
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];


let masuk = 0
let gak:string[] = []
function printAttendanceReport(student:student[]){
    for(let a of student){
        if(a.present){
            masuk++
        }else{
            gak.push(a.name);
        }
    }
    console.log(`masuk ${masuk} tidak masuk ${gak.length}`)
    console.log(gak)
}
printAttendanceReport(attendances);