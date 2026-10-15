const order = {
    id: 'ORD-1001',
    customer: {
        name: 'Ava Stone',
        email: 'ava@example.com',
    },
    payment: {
        status: 'paid',
    },
    shipping: {
        status: 'shipped',
        estimatedDelivery: '2026-06-18',
    },
    items: [
        { name: 'Notebook', quantity: 2 },
        { name: 'Pen Set', quantity: 1 },
    ],
};

console.log(createOrderSummary(order));
console.log(isPaid(order));
console.log(hasShipped(order));

const pendingOrder = {
    ...order,
    payment: { status: 'unpaid' },
    shipping: { status: 'processing', estimatedDelivery: '2026-06-18' },
};
console.log(needsAttention(pendingOrder));
console.log(getDeliveryMessage(pendingOrder));

function isPaid(order) {
    return order.payment.status === 'paid';
}