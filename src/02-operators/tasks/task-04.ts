/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
const namaProduk: string[] = ["Mechanical_Keyboard", "Wireless_Mouse", "Mouse_Pad"]
let alltotal=0,total=0,harga: number[] = [850000,275000,120000];
let quantity: number[] = [1 ,2,3];


for(let i=0;i<namaProduk.length;i++){
    total+=harga[i]*quantity[i];
    console.log(`
=== Produk ${i+1} ===
Nama Product: ${namaProduk[i]}
Harga: ${harga[i]}
Quantity: ${quantity[i]}
Total: ${total}`);
alltotal+=total;
}

console.log("Overall Total:",alltotal)