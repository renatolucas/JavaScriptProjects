
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));

function calculateDiscount(price, discountPercent) {
    const discountValue = price * (discountPercent / 100);
    return discountValue;
}

function calculateTax(priceAfterDiscount, taxPercent) {
    const tax = priceAfterDiscount * (taxPercent / 100);
    return tax;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const priceWithTax = priceAfterDiscount + tax;
    return priceWithTax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const discount = calculateDiscount(price, discountPercent);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
    const priceSummary = {
        price: price,
        discount: discount,
        tax: tax,
        finalPrice: finalPrice
    }

    return priceSummary;
}