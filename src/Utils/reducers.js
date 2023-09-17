import { FETCH_TASKS, ADD_TASK, EDIT_TASK, COMPLETE_TASK, DELETE_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.taskId ? { ...task, title: action.newTitle } : task
        ),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.taskId ? { ...task, completed: !task.completed } : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskId),
      };
    default:
      return state;
  }
};

export default taskReducer;