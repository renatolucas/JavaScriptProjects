
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));

function calculateDiscount(price, discountPercent) {
    const discountValue = price * (discountPercent / 100);
    return price - discountValue;
}

function calculateTax(priceAfterDiscount, taxPercent) {
    const tax = priceAfterDiscount * (taxPercent / 100);
    return priceAfterDiscount + tax;
}

function calculateFinalPrice(price, discountPercent, taxPercent) {
    const priceAfterDiscount = calculateDiscount(price, discountPercent);
    const priceWithTax = calculateTax(priceAfterDiscount, taxPercent);
    return priceWithTax;
}

function createPriceSummary(price, discountPercent, taxPercent) {
    const priceAfterDiscount = calculateDiscount(price, discountPercent);
    const tax = calculateTax(priceAfterDiscount, taxPercent);
    const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
    const priceSummary = {
        price: price,
        discount: priceAfterDiscount,
        tax: tax,
        finalPrice: finalPrice
    }

    return priceSummary;
}