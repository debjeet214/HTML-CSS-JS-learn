/* The shopping totalizer: you are working in an e-commerce website, you need to write a function name 
calculateTotal that will take an array of products with prices and quantities and return the total cost*/



function calculateTotal(products) {
    let total = 0;
    
    // Iterate through each product in the array
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      
      // Check if the product has both price and quantity defined
      if (product.price !== undefined && product.quantity !== undefined) {
        // Add the product's total cost (price * quantity) to the overall total
        total += product.price * product.quantity;
      } else {
        // If any product is missing price or quantity, return NaN (Not a Number)
        return NaN;
      }
    }
    
    return total;
  }
  
  // Example usage:
  const products = [
    { name: "Product 1", price: parseInt(prompt('enter price of item 1')), quantity: parseInt(prompt('how many item 1 you want')) },  // we can take user input
    { name: "Product 2", price: 56.50, quantity: 3 },
    { name: "Product 3", price: 81.25, quantity: 1 }    // we can just manually add values direct to code
  ];
  
  const totalCost = calculateTotal(products);
  console.log("Total shop cost: ", totalCost, " dollars");
