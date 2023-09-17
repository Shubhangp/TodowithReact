import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, addTask, editTask, completeTask, deleteTask } from "../Utils/actions";
import { fetchTasksFromAPI } from "../api";

const loadTasksFromLocalStorage = (dispatch) => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    dispatch(fetchTasks(savedTasks));
  }
};

const Body = () => {
  const [newTasks, setNewTasks] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetching the task from api
    if(tasks.length === 0){
      const fetchTasksData = async () => {
        try {
          const fetchtasks = await fetchTasksFromAPI();
          // Adding api task into the Redux store
          dispatch(fetchTasks(fetchtasks));
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
        // Adding Api data into localStorage
      };
      fetchTasksData();
    }
    loadTasksFromLocalStorage(dispatch);
  }, [dispatch]);

  const handleAddTask = () => {
    // Create new id for upcoming task
    const lastItem = tasks.slice(-1);
    const taskLength = lastItem[0].id + 1;
    // Create new task object
    const newTask = {
      userId: 1,
      id: taskLength,
      title: newTasks,
      completed: false,
    };
    // Adding the new task into the Redux store
    dispatch(addTask(newTask));
    alert("Task Add successfully, if there is more task please scroll down");
    setNewTasks("");
  };

  const handleComplete = (taskId) => {
    // Mark And Unmark the task complition into the Redux store
    dispatch(completeTask(taskId));
  };

 const handleEdit = (taskId) => {
   setEditTaskId(taskId);
   const taskToEdit = tasks.find((task) => task.id === taskId);
   setEditedTaskTitle(taskToEdit.title);
 };

 const handleSaveEdit = () => {
   // Edit the task from the Redux store
   dispatch(editTask(editTaskId, editedTaskTitle));
   setEditTaskId(null);
   setEditedTaskTitle("");
 };

  const handleDelete = (taskId) => {
      // Remove the task from the Redux store
      dispatch(deleteTask(taskId));
  };

  return (
    <div className="container">
      <TodoList
        editedTaskTitle={editedTaskTitle} 
        editTaskId={editTaskId} 
        setEditedTaskTitle={setEditedTaskTitle}  
        handleSaveEdit={handleSaveEdit}
        setEditTaskId={setEditTaskId}
        newTasks={newTasks}
        setNewTasks={setNewTasks}
        handleAddTask={handleAddTask}
        tasks={tasks}
        handleComplete={handleComplete}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Body;