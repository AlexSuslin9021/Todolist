import React from "react";
import {FilteredValuesType} from "./App";
type PropsType={
    title:string
    tasks:Array<TaskType>
    removeTask:(taskId:number)=>void
    changeFilter:(value:FilteredValuesType)=>void

}
type TaskType={
    id:number,
    title:string,
    isDone:boolean


}
export const Todolist=(props:PropsType)=>{
    return (

            <div>
                <h3>{props.title}</h3>

                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {props.tasks.map((t, index) => {
                        return <li key={index}>
                            <button onClick={()=>{props.removeTask(t.id)}}> x</button>
                            <input type="checkbox"
                                   checked={t.isDone} readOnly/>

                            <span>{t.title}</span>
                        </li>
                    })}

                </ul>
                <div>
                    <button onClick={()=>{props.changeFilter('All')}}>All</button>
                    <button onClick={()=>{props.changeFilter('active')}}>Active</button>
                    <button onClick={()=>{props.changeFilter('completed')}}>Completed</button>
                </div>
            </div>

    );

}