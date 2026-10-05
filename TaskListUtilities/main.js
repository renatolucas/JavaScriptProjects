const tasks = [
    { id: 1, title: 'Review variables', completed: true },
    { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));

function removeTask(tasks, taskId) {
    return tasks.filter((task) => task.id !== taskId);
}

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
    return tasks.map((task) => {
        if (task.id !== taskId) {
            return task;
        }
        return { ...task, completed: true };
    });
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
