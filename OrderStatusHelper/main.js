

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

function hasShipped(order) {
    return order.shipping.status === 'shipped'
}

function getDeliveryMessage(order) {
    if (hasShipped(order)) {
        return order.shipping.estimatedDelivery;
    }

    return null;
}

function needsAttention(order) {
    if (!isPaid(order) || !hasShipped(order)) {
        return true;
    }

    return false;
}

function createOrderSummary(order) {
    const deliveryMessage = getDeliveryMessage(order);
    return {
        id: order.id,
        customerName: order.customer.name,
        paid: isPaid(order),
        shipped: hasShipped(order),
        itemCount: order.items.reduce((acc, item) => acc + item.quantity, 0),
        deliveryMessage: deliveryMessage !== null ? `Order shipped. Estimated delivery: ${deliveryMessage}` : 'Order has not shipped yet.',
        needsAttention: needsAttention(order)
    }
}