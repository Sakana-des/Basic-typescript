/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];
let out = 0
let low = 0
let safe = 0
let total = 0
let avg = 0

for(let i = 0 ; i < stocks.length; i++){
    const stock = stocks[i]
    if(stock === 0){
        out++
    }else if(stock < 10){
        low++
    }else if(stock >= 10){
        safe++
    }
    let a = 0
    let b = 0
    total++
    a = b+=stock
    avg = a / total 
    
}
let all = [`out stock ${out}`,`low stock ${low}`,`safe stock ${safe}`,`total stock ${total}`,`average stock ${avg}`]

for(let semua of all){
    console.log(semua)
}