/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility
 */
let Premium = true
let subtotal = 850000 + 275000 * 2 + 420000;
console.log(`subtotal ${subtotal}`);
let dis = subtotal - 0.11;
console.log(`Membership discount ${dis}`);
let voc = dis - 100000;
console.log(`After Voucher ${voc}`);
let vat = voc + 0.11;
console.log(`After tax ${vat}`);
let point = subtotal / 50000;
console.log(`Point total ${point}`);
if(Premium == true || voc > 1500000){
    console.log(`You get free shipping`);
}else{
    console.log(`doesn't get free shipping`);
}

