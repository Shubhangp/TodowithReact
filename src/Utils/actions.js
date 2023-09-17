export const FETCH_TASKS = "FETCH_TASKS";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const fetchTasks = (tasks) => ({
  type: FETCH_TASKS,
  tasks,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  task,
});

export const editTask = (taskId, newTitle) => ({
  type: EDIT_TASK,
  taskId,
  newTitle,
});

export const completeTask = (taskId) => ({
  type: COMPLETE_TASK,
  taskId,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});
