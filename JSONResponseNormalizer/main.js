/*An API response often contains more data than your program needs. Normalize the response into a smaller list of published article summaries.

Write these functions:

getPublishedArticles(response) should return only articles where status is "published".

toArticleSummary(article) should return an object with id, title, authorName, and views.

normalizeArticles(response) should return summaries for published articles only.

Sample checks:*/

const apiResponse = {
    data: [
        {
            id: 'a1',
            title: 'Learning JavaScript',
            status: 'published',
            author: { name: 'Ava Stone' },
            stats: { views: 1200 },
        },
        {
            id: 'a2',
            title: 'Draft Notes',
            status: 'draft',
            author: { name: 'Noah Kim' },
            stats: { views: 50 },
        },
        {
            id: 'a3',
            title: 'Async Basics',
            status: 'published',
            author: { name: 'Mina Patel' },
            stats: { views: 900 },
        },
    ],
    meta: {
        total: 3,
    },
};

// console.log(normalizeArticles(apiResponse));
// console.log(getPublishedArticles(apiResponse).length);
// console.log(toArticleSummary(apiResponse.data[0]));

console.log(getPublishedArticles(apiResponse));
console.log(toArticleSummary(apiResponse.data[0]));

function getPublishedArticles(apiResponse) {
    return apiResponse.data.filter(article => article.status === 'published');
}

function toArticleSummary(article) {
    return {
        id: article.id,
        title: article.title,
        authorName: article.author.name,
        views: article.stats.views
    }
}