/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */
type Student = {name:string, major:string, active:boolean};
type CountMajor = [string,number][];
type EnrollMj = [string,Student[]][]; 

const students:Student[] = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(studs:Student[]):number{
  return studs.reduce((t,n,i)=>students[i].active?t+1:t,0);
}

function countInactiveStudents(studs:Student[]):number{
  return studs.reduce((t,n,i)=>students[i].active?t:t+1,0);
}

function enroll(studs:Student[]): EnrollMj{
  let majors:string[] = [], en:EnrollMj =[];
  studs.forEach(s=>{
    if(!majors.includes(s.major)){
      majors[arguments.length] = s.major;
      en[en.length] = [s.major,[]];
    }
    let t = en[majors.indexOf(s.major)][1];
    t[t.length] = s;
  });
  return en;
}

const enrolled = enroll(students)

function countStudentsByMajor(studs:EnrollMj):CountMajor{
  let c:CountMajor = []; 
  studs.forEach(e=>{
    c[c.length] = [e[0],e[1].reduce(t=>t+1,0)];
  });
  return c;
}

function printEnrollmentReport(){
  
}

console.info(enroll(students));