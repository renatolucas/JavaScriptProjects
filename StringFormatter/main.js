console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));

function cleanText(text) {
    return text.trim();
}

function capitalize(text) {
    const firstLetter = text.charAt(0).toUpperCase();
    const rest = text.slice(1, text.length).toLowerCase();
    return firstLetter + rest;
}

function formatDisplayName(firstName, lastName) {
    return `${capitalize(cleanText(firstName))} ${capitalize(cleanText(lastName))}`;
}