const order = {
    id: 'ORD-1001',
    customer: {
        name: 'Ava Stone',
        email: 'ava@example.com',
    },
    payment: {
        status: 'unpaid',
    },
    shipping: {
        status: 'unshipped',
        estimatedDelivery: '2026-06-18',
    },
    items: [
        { name: 'Notebook', quantity: 2 },
        { name: 'Pen Set', quantity: 1 },
    ],
};
console.log(isPaid(order));
console.log(hasShipped(order));
console.log(getDeliveryMessage(order));

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
        itemCount: order.items.length,
        deliveryMessage: deliveryMessage ? `Order shipped. Estimated delivery: ${deliveryMessage}` : '',
        needsAttention: needsAttention(order)
    }
}