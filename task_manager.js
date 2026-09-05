const tasks = [];

function addTask(title) {
  const task = {
    id: tasks.length + 1,
    title: title.trim(),
    completed: false,
  };

  if (!task.title) {
    throw new Error("Task title is required.");
  }

  tasks.push(task);
  return task;
}

function toggleTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    throw new Error("Task not found.");
  }

  task.completed = !task.completed;
  return task;
}

function deleteTask(id) {
  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    throw new Error("Task not found.");
  }

  return tasks.splice(index, 1)[0];
}

function listTasks() {
  return [...tasks];
}

// Demo
addTask("Learn JavaScript");
addTask("Build a small project");
toggleTask(1);

console.log("Task Manager");
console.table(listTasks());
deleteTask(2);
console.log("After deleting task 2:");
console.table(listTasks());
