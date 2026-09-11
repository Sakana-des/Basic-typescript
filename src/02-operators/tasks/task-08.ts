/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

let pev = 25640,
    Cur = 25892,
    Price = 1650, //perkwh
    solar:boolean = true,
    saving:boolean = false,
    disc = 0.20,
    a = 0
    

let totalUSG = Cur - pev;
console.log(`Total energy consump ${totalUSG}`);
let bill = totalUSG * Price;
console.log(`Electricity bill ${bill}`);
if(solar == true){
    a = bill - disc
}else{
    a = bill
}
console.log(`Final bill ${a}`);
if(solar && totalUSG < 300 && saving){
    console.log(`Green Energy Program Eligible`);
}else{
    console.log(`Green Energy Program Not Eligible`);
}