/*
You are building search helpers for a small product list. Some helpers should return multiple products, and one helper should return a single product.

Write these functions:

filterByCategory(products, category) should return products in the matching category.

filterByMaxPrice(products, maxPrice) should return products at or below the max price.

getInStockProducts(products) should return products where inStock is true.

findProductById(products, productId) should return one matching product or undefined.

searchProducts(products, searchText) should return products whose name includes the search text, ignoring casing.*/

const products = [
    { id: 1, name: 'Notebook', category: 'stationery', price: 10, inStock: true },
    { id: 2, name: 'Desk Lamp', category: 'home', price: 35, inStock: false },
    { id: 3, name: 'Pen Set', category: 'stationery', price: 6, inStock: true },
    {
        id: 4,
        name: 'Water Bottle',
        category: 'fitness',
        price: 18,
        inStock: true,
    },
];