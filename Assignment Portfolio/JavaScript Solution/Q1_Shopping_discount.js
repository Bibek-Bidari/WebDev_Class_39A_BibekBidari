
let purchaseAmount = 120;

if (purchaseAmount >= 100) {
    let discount = purchaseAmount * 0.20;
    let finalPrice = purchaseAmount - discount;
    console.log("Discount: 20%");
    console.log("Final Price: $" + finalPrice);
} 
else if (purchaseAmount >= 50) {
    let discount = purchaseAmount * 0.10;
    let finalPrice = purchaseAmount - discount;
    console.log("Discount: 10%");
    console.log("Final Price: $" + finalPrice);
} 
else {
    console.log("No Discount");
    console.log("Final Price: $" + purchaseAmount);
}
