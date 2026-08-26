/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales = [
125000,
350000,
78000,
910000,
150000,
420000,
275000,
99000,
640000,
18000
]
let total = 0
let jumlah = 0
let High = sales[0]
let low = sales[0]
let thremore = 0
let avg = 0

for(let i = 0; i < sales.length; i++){
    const sale = sales[i]
    jumlah = total+=sale
    
    if(High > sales[0]){
        
    }
}
console.log(`Total sales revenue ${jumlah}`)
console.log(High)