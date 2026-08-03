/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

    const Product1: {ProductCode : string, ProductName: string, SellPrice: number, stock: number, Weight: string, Rating: number, AvgRate: number, discounted: boolean} = {
        ProductCode : "PC1",
        ProductName : "keyboard",
        SellPrice : 850000,
        stock : 128,
        Weight : "10ons",
        Rating : 10,
        AvgRate : 9.3,
        discounted : true
    };

    const Product2: {ProductCode : string, ProductName: string, SellPrice: number, stock: number, Weight: string, Rating: number, AvgRate: number, discounted: boolean} = {
        ProductCode : "PC2",
        ProductName : "Mouse",
        SellPrice : 50000,
        stock : 112,
        Weight : "2ons",
        Rating : 10,
        AvgRate : 9.5,
        discounted : true
    };

    const Product3: {ProductCode : string, ProductName: string, SellPrice: number, stock: number, Weight: string, Rating: number, AvgRate: number, discounted: boolean} = {
        ProductCode : "PC3",
        ProductName : "monitor",
        SellPrice : 1500000,
        stock : 120,
        Weight : "12ons",
        Rating : 10,
        AvgRate : 9.3,
        discounted : false
    };

    console.log(Product1, Product2, Product3);