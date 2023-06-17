import React from 'react';

const TaskList = ({ tasks, onDeleteTask, onTaskCompletion }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <button onClick={() => onDeleteTask(index)}>Delete</button>
          <button onClick={() => onTaskCompletion(index)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
