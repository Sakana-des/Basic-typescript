/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
type order = {id:string, paid:boolean, stockAvailable:boolean}
const orders:order[] = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];
let ready = 0
let user:string[] = []
let unpaid = 0
let waiting = 0

for(let i = 0; i < orders.length;i++){
  if(orders[i].paid && orders[i].stockAvailable){
    ready++
    user.push(orders[i].id)
  }
  if(orders[i].paid == false){
    unpaid++
  }
  if(orders[i].paid && orders[i].stockAvailable == false){
    waiting++
  }
}

console.log(ready,unpaid,waiting,user);