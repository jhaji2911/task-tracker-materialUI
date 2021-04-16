import React from 'react'
import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTasks  from  './components/AddTasks';
const App = () => {

  const  [showTask,setShowTask] = useState(false);
  const [tasks , setTasks] = useState([
    {
        id:1,
        text:"Buy new Phone",
        day:"April 25th at 4:30pm",
        reminder:true,
    },
    {
        id:2,
        text:"Go out for Walk",
        day:"April 22nd at 6:30pm",
        reminder:true,
    },
    {
        id:3,
        text:"Take some rest ",
        day:"April 21st at 2:30pm",
        reminder:false,
    }
])

//Adding Tasks
const addTask = (task) => {
 const id = Math.floor(Math.random()*10000)+1;
const newTask  = { id, ...task};
setTasks([...tasks,newTask])

console.log((tasks))
}


//delete the tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//toggle reminder of tasks through map

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {
      ...task, reminder:!task.reminder
  }: task))

}

  return (
    <>
    <div className="holder">
     <Header  onAdd ={()=> setShowTask(!showTask)} showAdd={showTask} title="Task Tracker" />
     {showTask  &&  <AddTasks onAdd={addTask}/> }
     { tasks.length >0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No you don't have any Tasks!!"}
     </div>
   
    
</>  )
}

export default App
