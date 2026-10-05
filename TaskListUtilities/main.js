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

const completed = completeTask(withNewTask, 2);
//console.log(completed);
console.log(countIncompleteTasks(completed));

function countIncompleteTasks(tasks) {
    let count = 0;
    for (const task of tasks) {
        if (!task.completed) {
            count++;
        }
    }
    return count;
}

function completeTask(tasks, taskId) {
    const copyTasks = [...tasks];
    for (const task of copyTasks) {
        if (taskId === task.id) {
            task.completed = true;
        }
    }

    return copyTasks;
}

function addTask(tasks, title) {
    const tasksIds = tasks.map((task) => task.id);
    const nextId = tasks.length > 0 ? Math.max(...tasksIds) + 1 : 1;
    const newTask = {
        id: nextId,
        title: title,
        completed: false
    }
    return [...tasks, newTask];
}
