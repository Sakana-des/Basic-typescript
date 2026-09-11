/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */
type student = {name:string, present:boolean};
const attendances:student[] = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];
let a = 0
let b = 0
let l:string[] = []
for(let i = 0;i < attendances.length; i++){
  if(attendances[i].present){
    a++
  }else{
    b++
    l.push(attendances[i].name)
  }
}
console.log(a,b,l,a / attendances.length * 100 + "%");