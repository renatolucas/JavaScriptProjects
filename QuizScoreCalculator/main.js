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

console.log(isAnswerCorrect(questions[0], userAnswers[0]))


function isAnswerCorrect(question, userAnswer) {
    if (question.id === userAnswer.questionId) {
        if (question.correctAnswer === userAnswer.answer) {
            return true;
        }
    }

    return false;

}

