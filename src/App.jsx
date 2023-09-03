import React, { useState } from 'react';
import TaskList from './component/TaskList';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  function createTask(event) {
    setNewTask(event.target.value);
  }

  function submissionTest(event) {
    event.preventDefault();
    if (newTask.trim() !== '') {
      setTaskList([...taskList, newTask]);
      setNewTask('');
    }
  }
  
  const tasks = taskList.map((item, index) => (
    <TaskList 
      key = {index}
      item = {item}
    />
  ));

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
      {tasks}
    </div>
  </>
  );
}
