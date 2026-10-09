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

console.log(createQuizResult(questions, userAnswers));
console.log(countCorrectAnswers(questions, userAnswers));
console.log(calculatePercentage(3, questions.length));

const partialAnswers = [{ questionId: 1, answer: 'B' }];
console.log(createQuizResult(questions, partialAnswers));

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

function createQuizResult(questions, userAnswers) {
    const correctCount = countCorrectAnswers(questions, userAnswers);
    const totalQuestions = questions.length;
    const percentage = calculatePercentage(correctCount, questions.length);
    const message = getResultMessage(percentage);

    return {
        correctCount: correctCount,
        totalQuestions: totalQuestions,
        percentage: percentage,
        message: message
    }
} //should return correctCount, totalQuestions, percentage, and message.*/
