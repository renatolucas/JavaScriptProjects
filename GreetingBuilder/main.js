console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));


function formatName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
    if (timeOfDay.toLowerCase() === 'morning') {
        return 'Good morning'
    }
    else if (timeOfDay.toLowerCase() === 'afternoon') {
        return 'Good afternoon'
    }
    else {
        return 'Good evening'
    }
}

function createGreeting(firstName, lastName, timeOfDay) {
    let greetingDay = getGreeting(timeOfDay);
    let name = formatName(firstName, lastName);

    return `${greetingDay}, ${name}`;
}
