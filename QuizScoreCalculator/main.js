/*Score a quiz by matching each question with the answer the user gave. The final result should include the count, total, percentage, and a simple message.

Write these functions:

isAnswerCorrect(question, userAnswer) should return true when the user's answer matches the correct answer.

countCorrectAnswers(questions, userAnswers) should match each question with its user answer and return the number correct.

calculatePercentage(correctCount, totalQuestions) should return the percentage score.

getResultMessage(percentage) should return a short message based on the percentage.

createQuizResult(questions, userAnswers) should return correctCount, totalQuestions, percentage, and message.*/

const questions = [
    { id: 1, correctAnswer: 'B' },
    { id: 2, correctAnswer: 'A' },
    { id: 3, correctAnswer: 'D' },
    { id: 4, correctAnswer: 'C' },
];
const userAnswers = [
    { questionId: 1, answer: 'B' },
    { questionId: 2, answer: 'C' },
    { questionId: 3, answer: 'D' },
    { questionId: 4, answer: 'C' },
];

console.log(isAnswerCorrect(questions[0], userAnswers[0]));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(countCorrectAnswers(questions, userAnswers), questions.length));
console.log(getResultMessage(calculatePercentage(countCorrectAnswers(questions, userAnswers), questions.length)));


function isAnswerCorrect(question, userAnswer) {
    if (question.id === userAnswer.questionId) {
        if (question.correctAnswer === userAnswer.answer) {
            return true;
        }
    }

    return false;

}

function countCorrectAnswers(questions, userAnswers) {
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
        for (let j = i; j < userAnswers.length; j++) {
            if (questions[i].id === userAnswers[j].questionId && questions[i].correctAnswer === userAnswers[j].answer) {
                count++;
            }
        }
    }

    return count;
}

function calculatePercentage(correctCount, totalQuestions) {
    return (correctCount / totalQuestions) * 100;
}

function getResultMessage(percentage) {
    if (percentage >= 80) {
        return 'Great work';
    } else if (percentage >= 60) {
        return 'You passed';
    }

    return 'Keep Practicing';
} //should return a short message based on the percentage.

