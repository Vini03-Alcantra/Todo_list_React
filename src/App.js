import React, {useState} from 'react';
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
  return (
    <>  
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks}/>
      </div>
    </>
  )
}

export default App;