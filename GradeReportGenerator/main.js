/*
Turn a numeric score into a grade report. The report should include the letter grade, whether the student passed, and a short feedback message.

Write these functions:

getLetterGrade(score) should return "A", "B", "C", "D", or "F" based on the score.

hasPassed(score) should return true when the score is 60 or higher.

getFeedback(grade) should return a short message for the grade.

createGradeReport(name, score) should return one object with name, score, grade, passed, and feedback.
*/



function hasPassed(score) {
    return score >= 60;
}

function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}