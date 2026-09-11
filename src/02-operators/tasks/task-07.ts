/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
const room = 650000
const stay = 4
const charge = 120000
const tax = 0.11
const vip = true

    console.log(`Sub total = ${room * stay} `);
    console.log(`Discount = ${room * stay - charge}`);
    console.log(`Tax = ${room * stay - charge + tax}`);
    console.log(`Final payment = ${room * stay - charge + tax}`);
    if(vip == true || stay > 3){
        console.log(`Free breakfast`);
    }else{
        console.log(`Didn't get free breakfast`);
    }