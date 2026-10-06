const expenses = [
    { id: 1, category: 'food', amount: 24 },
    { id: 2, category: 'transport', amount: 15 },
    { id: 3, category: 'food', amount: 18 },
    { id: 4, category: 'books', amount: 40 },
];

console.log(createExpenseSummary(expenses));
console.log(calculateCategoryTotal(expenses, 'food'));
console.log(calculateCategoryTotal(expenses, 'health'));
console.log(findLargestExpense(expenses));


function calculateTotal(expenses) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function calculateCategoryTotal(expenses, category) {
    const expensesByCategory = expenses.filter(expense => expense.category === category);
    return calculateTotal(expensesByCategory);
}

function findLargestExpense(expenses) {
    let largestExpense = expenses[0];
    for (const expense of expenses) {
        if (expense.amount > largestExpense.amount) {
            largestExpense = expense;
        }
    }
    return largestExpense;
}

function createExpenseSummary(expenses) {
    const total = calculateTotal(expenses);
    const foodTotal = calculateCategoryTotal(expenses, 'food');
    const transportTotal = calculateCategoryTotal(expenses, 'transport');
    const largestExpense = findLargestExpense(expenses);

    return {
        total: total,
        foodTotal: foodTotal,
        transportTotal: transportTotal,
        largestExpense: largestExpense
    }
}