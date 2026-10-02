/*
A cart contains items with a price and quantity. Build a summary that calculates subtotal, discount, tax, and final total.

Write these functions:

calculateSubtotal(items) should add price * quantity for every item.

calculateDiscount(subtotal, discountPercent) should return the discount amount.

calculateTax(amountAfterDiscount, taxPercent) should return the tax amount after the discount.

createCartSummary(items, discountPercent, taxPercent) should return an object with subtotal, discount, tax, and total.

Sample checks:
 */
const cartItems = [
    { name: 'Notebook', price: 10, quantity: 2 },
    { name: 'Pen', price: 2, quantity: 5 },
    { name: 'Bag', price: 30, quantity: 1 },
];

console.log(createCartSummary(cartItems, 10, 5));
console.log(calculateSubtotal(cartItems));

const singleItemCart = [{ name: 'Mouse', price: 25, quantity: 2 }];
console.log(createCartSummary(singleItemCart, 0, 10));

function calculateSubtotal(items) {
    return items.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
}

function calculateDiscount(subtotal, discountPercent) {
    return subtotal * (discountPercent / 100);
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * (taxPercent / 100);
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;
    const summary = {
        subtotal: subtotal,
        discount: discount,
        tax: tax,
        total: total

    };

    return summary;

}