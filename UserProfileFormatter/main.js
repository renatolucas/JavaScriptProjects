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


function getDisplayName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getLocation(user) {
    return `${user.account.city}, ${user.account.country}`;
}

