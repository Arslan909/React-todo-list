import React, { useState, useEffect } from 'react';
import TaskList from './component/TaskList';

export default function App() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');

    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList));
  }, [taskList]);

  function createTask(event) {
    setNewTask(event.target.value);
  }

  function submissionTest(event) {
    event.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskList = [...taskList, { text: newTask, isChecked: false }];
      setTaskList(newTaskList);
      setNewTask('');
    }
  }

  function toggleTask(index) {
    const updatedTaskList = [...taskList];
    updatedTaskList[index].isChecked = !updatedTaskList[index].isChecked;
    setTaskList(updatedTaskList);
  }

  return (
    <>
    <h1 className="header">Todo List</h1>
    <div className='main-container'>
      <form className="form-container" onSubmit={submissionTest}>
        <input
          type="text"
          className="input-task"
          value={newTask}
          onChange={createTask}
          placeholder="Input task"
        />
        <button className="add-button">Add Task</button>
      </form>
      {taskList.map((item, index) => (
        <TaskList 
          key={index}
          item={item.text}
          isChecked={item.isChecked}
          onToggle={() => toggleTask(index)}
        />
      ))}
    </div>
  </>
  );
}
