/*
Given a list of expenses, calculate useful totals and identify the largest expense. The final summary should reuse the smaller helper functions.

Write these functions:

calculateTotal(expenses) should return the total amount spent.

calculateCategoryTotal(expenses, category) should return the total for one category.

findLargestExpense(expenses) should return the full expense object with the largest amount.

createExpenseSummary(expenses) should return total, foodTotal, transportTotal, and largestExpense.

Sample checks:
*/

const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];