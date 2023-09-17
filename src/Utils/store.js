import { createStore } from "redux";
import taskReducer from "./reducers";

// Load tasks from local storage or initialize with an empty array
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  tasks: savedTasks,
};

const store = createStore(taskReducer, initialState);

// Subscribe to store changes and save tasks to local storage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
});

export default store;
