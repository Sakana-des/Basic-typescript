/**
 * A student can participate in the graduation ceremony only if all of the following conditions are met:
 * - Final score is at least 75
 * - Attendance is at least 90%
 * - All tuition fees have been paid
 * 
 * Today, the administration receives the following student information.
| Information  | Value |
| ------------ | ----- |
| Final Score  | 82    |
| Attendance   | 94    |
| Tuition Paid | Yes   |

 * Task: Store and display the result in a variable named "isEligible"

 */
const score:number = 82;
const result = score >= 75;
console.log("\n=== Final Score ===");
console.log(`Score ${score}: ${result ? "Pass" : "Fail"}`);

const Attendance:number = 94;
const results = Attendance >= 90;
console.log("\n=== Attendance ===");
console.log(`Score ${Attendance}: ${results? "Pass" : "Fail"}`);

const Paid:boolean =true;
console.log("\n=== Tuition Paid ===");
console.log(`Score ${Paid}: ${Paid? "Pass" : "Fail"}`);

const isEligible =  result && results && Paid ? "Yes Eligible" : "Not Eligible";
console.log("\n=== Eligible? ===");
console.log(` ${isEligible}`)