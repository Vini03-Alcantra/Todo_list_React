import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

import "./App.css";

const App = () => {
  // let message = "Hello World"
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Study Programming",
      completed: false
    },
    {
      id: "2",
      title: "Read Clean Code",
      completed: true
    },
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false
      }
    ];

    setTasks(newTasks)
  }

  return (
    <>  
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;