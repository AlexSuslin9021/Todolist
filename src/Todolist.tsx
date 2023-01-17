import React, {ChangeEvent, KeyboardEventHandler, useState} from 'react';
import {FilterValuesType} from './App';
import {keyboardKey} from "@testing-library/user-event";
import {Button} from "./button/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask:(inputValue:string)=>void
}

export function Todolist(props: PropsType) {

    let[inputValue, setInputValue]=useState('')

    const OnChangeInput=(event:ChangeEvent<HTMLInputElement>)=>{
       setInputValue( event.currentTarget.value)

    }
    const addTasks=()=>{
        props.addTask(inputValue)
        setInputValue('')
    }

    const OnKeyEnter=(event:keyboardKey)=>{
        if(event.key==='Enter') addTasks()
    }

    const ButtonAll=()=>{
        props.changeFilter("all")
    }
    const ButtonActive=()=>{
        props.changeFilter("active")
    }
    const ButtonCompleted=()=>{
        props.changeFilter("completed")
    }
    const onClickHandler=(tId:string)=>{
        props.removeTask(tId)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={inputValue} onChange={OnChangeInput} onKeyDown={OnKeyEnter} />
            {/*<input value={inputValue} onChange={OnChangeInput} onKeyDown={(event)=>{*/}
            {/*if(event.key==='Enter') addTasks()}*/}
            {/*} />*/}
            {/*<button onClick={addTasks}>+</button>*/}
            <Button name={'+'} callback={addTasks} />
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    {/*<button onClick={ () => onClickHandler(t.id) }>x</button>*/}
                    <Button name={'x'} callback={()=>onClickHandler(t.id)} />
                </li>)
            }
        </ul>
        <div>
            <Button name={'All'} callback={ButtonAll} />
            <Button name={'Active'} callback={ButtonActive} />
            <Button name={'Completed'} callback={ButtonActive} />
            {/*<button onClick={  ButtonAll  }>*/}
            {/*    All*/}
            {/*</button>*/}
            {/*<button onClick={ ButtonActive  }>*/}
            {/*    Active*/}
            {/*</button>*/}
            {/*<button onClick={ButtonCompleted  }>*/}
            {/*    Completed*/}
            {/*</button>*/}
        </div>
    </div>
}
