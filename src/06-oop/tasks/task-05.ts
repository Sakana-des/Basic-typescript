/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */
class product {
  productID: string;
  name: string;
  private price: number;
  private stock: number;

  constructor(productID: string, name: string, price: number, stock: number) {
    this.productID = productID;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  addStock(stock:number): void {
    if (stock > 0) {
      this.stock = stock;
      console.log(``);
      console.log(`addStock success`);
    } else {
      console.log(`changePrice failed`);
    }
  }
  removeStock(stock: number): void {
    if (stock > 0 && stock <= this.stock) {
      this.stock = stock;
      console.log(``);
      console.log(`removeStock success`);
    } else {
      console.log(`changePrice failed`);
    }
    
  }

  changePrice(price: number): void {
    if (price > 0) {
      this.price = price;
      console.log(``);
      console.log(`changePrice success`);
    } else {
      console.log(`changePrice failed`);
    }
    
  }

  isAvailable(): void {
    if (this.stock > 0) {
      console.log(`true`);
    } else {
      console.log(`lorem failed`);
    }
    
  }

  getInventoryValue(): number {
    return this.stock * this.price
  }

  showProductInfo():void{
    console.log(`=== product info ===`);
    console.log(`ProductID: ${this.productID}`);
    console.log(`Name Product: ${this.name}`);
    console.log(`Harga Product: ${this.price}`);
    console.log(`Stock Product: ${this.stock}`);
    
  }
}

const laptop = new product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);
laptop.showProductInfo()

laptop.addStock(5);

laptop.removeStock(3);

laptop.changePrice(14500000);

console.log(laptop.isAvailable());

console.log(laptop.getInventoryValue());