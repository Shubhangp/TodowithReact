import React from 'react'

const TodoList = (props) => {
  const {
    editedTaskTitle,
    editTaskId,
    setEditedTaskTitle,
    handleSaveEdit,
    setEditTaskId,
    newTasks,
    setNewTasks,
    handleAddTask,
    tasks,
    handleComplete,
    handleEdit,
    handleDelete
  } = props;

  return (
    <>
      <div className="input-container">
        <h2>To-Do List</h2>
        <div className="add-task-container">
          {editTaskId !== null ? (
            <>
              <input
                type="text"
                value={editedTaskTitle}
                onChange={(e) => setEditedTaskTitle(e.target.value)}
              />
              <button className="primary-button" onClick={handleSaveEdit}>
                Save
              </button>
              <button
                className="secondary-button"
                onClick={() => setEditTaskId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                className="add-task-input"
                placeholder="Enter task title"
                value={newTasks}
                onChange={(e) => setNewTasks(e.target.value)}
              />
              <button className="primary-button" onClick={handleAddTask}>
                Add
              </button>
            </>
          )}
        </div>
      </div>
      <ul>
        {tasks.length !== 0 ?
          (<>
            {tasks.map((task) => (
              <li key={task.id}>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    checked={task.completed}
                    onChange={() => handleComplete(task.id)}
                  />
                  <p className="checkbox-label">{task.title}</p>
                </div>
                {!editTaskId && (
                  <div className="action-button-container">
                    <button
                      className="edit-button"
                      title="Edit Task"
                      onClick={() => handleEdit(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M14.236 1.764a2.621 2.621 0 0 0-3.707 0L2.657 9.636a2.955 2.955 0 0 0-.772 1.354l-.87 3.386a.5.5 0 0 0 .61.608l3.385-.869a2.95 2.95 0 0 0 1.354-.772l7.872-7.872a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 1 1 2.293 2.293l-.779.779l-2.293-2.293l.779-.779ZM9.75 3.957l2.293 2.293l-6.386 6.386a1.954 1.954 0 0 1-.896.51l-2.567.66l.66-2.567a1.94 1.94 0 0 1 .51-.896L9.75 3.957Z"
                        />
                      </svg>
                    </button>
                    <button
                      className="delete-button"
                      title="Delete Task"
                      onClick={() => handleDelete(task.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="currentColor"
                          d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0Zm-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5H17.5Zm-3.841 26.147a4.75 4.75 0 0 0 4.733 4.353h11.216a4.75 4.75 0 0 0 4.734-4.353L36.324 13.5H11.676l1.983 23.647ZM21.5 20.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0v-14.5ZM27.75 19c.69 0 1.25.56 1.25 1.25v14.5a1.25 1.25 0 1 1-2.5 0v-14.5c0-.69.56-1.25 1.25-1.25Z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </>)
          : (<li>
              <div className='notask-container'>
                <h1 className='no-task'>Please add new task</h1>
              </div>
          </li>)
        }
      </ul>
    </>
  );
}

export default TodoList;
