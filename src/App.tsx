import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilteredValuesType= 'All' | "active" | "completed"
function App() {

let [tasks, setTask]=useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Rest ApI", isDone: false },
    { id: 5, title: "GraphQL", isDone: false }
])


  function  removeTask(id:number){
    let filteredTask=tasks.filter(t=>t.id !==id)
      setTask(filteredTask)
    }
    let [filter, setFilter]= useState<FilteredValuesType>('All')

    let tasksForTodolist =tasks


    if (filter === 'active') tasksForTodolist=tasks.filter((t) => {
        return !t.isDone
    });
    if (filter === 'completed') tasksForTodolist=tasks.filter((t) => {
       return t.isDone
    });


    const changeFilter=(value:FilteredValuesType)=>{
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks ={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />

        </div>
    );
}

export default App;
