/*
You are writing helper functions for a task list. Each helper should return a result without mutating the original tasks array.

Write these functions:

addTask(tasks, title) should return a new array with a new incomplete task added.

completeTask(tasks, taskId) should return a new array where only the matching task is completed.

removeTask(tasks, taskId) should return a new array without the matching task.

countIncompleteTasks(tasks) should return the number of incomplete tasks.
*/

const tasks = [
    { id: 1, title: 'Review variables', completed: true },
    { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

function addTask(tasks, title) {
    const nextId = tasks.length > 0 ? Math.max(...tasks) : 1;
    const newTask = {
        id: nextId,
        title: title,
        completed: false
    }
    return [...tasks, newTask];

}