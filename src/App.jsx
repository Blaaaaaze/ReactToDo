import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TasksList from './components/TasksList/TasksList'
import TaskForm from './components/TaskForm/TaskForm'

function App() {
  const LOCAL_STORAGE_KEY = 'tasks'
  const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
});

  const onAddTask = (task) => {
    setTasks([...tasks, task])
  }

  useEffect(() => {
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);


  return (
    <div>
      <Header></Header>
      <TaskForm onAddTask={onAddTask}/>
      <TasksList tasks={tasks} setTasks={setTasks}></TasksList>
    </div>

  )
}

export default App
