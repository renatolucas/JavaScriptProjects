/*
Format a nested user object into values that are easier to show in an interface or return from an API. The final summary should collect the smaller pieces.

Write these functions:

getDisplayName(user) should return the first and last name as one string.

getLocation(user) should return "City, Country".

getContactSummary(user) should return an object with email and phone.

isAccountActive(user) should return true when account.status is "active".

createProfileSummary(user) should return displayName, location, contact, active, and plan.
*/
const user = {
    id: 42,
    firstName: 'Ava',
    lastName: 'Stone',
    email: 'ava@example.com',
    phone: null,
    address: {
        city: 'London',
        country: 'UK',
    },
    account: {
        status: 'active',
        plan: 'pro',
    },
};


console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));

function getDisplayName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getLocation(user) {
    return `${user.address.city}, ${user.address.country}`;
}

function getContactSummary(user) {
    const email = user.email;
    const phone = user.phone;
    return {
        email: email,
        phone: phone
    }
}

function isAccountActive(user) {
    if (user.account.status) {
        return true;
    }

    return false;
}

function createProfileSummary(user) {
    return {
        displayName: getDisplayName(user),
        location: getLocation(user),
        contact: getContactSummary(user),
        active: isAccountActive(user),
        plan: user.account.plan
    }
}