import React, {ChangeEvent,  useState} from 'react';
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
    onCheek:(idT:string, even:boolean)=>void
}

export function Todolist(props: PropsType) {

    let[inputValue, setInputValue]=useState('')
    let[error, setError]=useState<string | null>(null)
    let [nameB, setNameB]=useState<FilterValuesType>('all')

    const OnChangeInput=(event:ChangeEvent<HTMLInputElement>)=>{
       setInputValue( event.currentTarget.value)
        setError(null)

    }
    const addTasks=()=>{
       if (inputValue.trim() !==''){
         props.addTask(inputValue.trim())
        setInputValue('')
       }
   else{
        setError('Ошибка')}}


    const OnKeyEnter=(event:keyboardKey)=>{
        if(event.key==='Enter') addTasks()
    }

    const ButtonAll=()=>{
        props.changeFilter("all")
        setNameB('all')

    }
    const ButtonActive=()=>{
        props.changeFilter("active")
        setNameB('active')
    }
    const ButtonCompleted=()=>{
        props.changeFilter("completed")
        setNameB('completed')
    }
    const onClickHandler=(tId:string)=>{
        props.removeTask(tId)
    }

    // const onChangeCheek=(event:ChangeEvent<HTMLInputElement>)=>{
    //     props.onCheek(event.currentTarget.checked)
    // }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input className={error ? 'errorInput':''}
                   value={inputValue}
                   onChange={OnChangeInput}
                   onKeyDown={OnKeyEnter}
            />
            <Button name={'+'} callback={addTasks} />
            {error && <div className={'error'}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone} onChange={(event)=>props.onCheek(t.id,event.currentTarget.checked)}/>
                    <span>{t.title}</span>
                    <Button name={'x'} callback={()=>onClickHandler(t.id)} />
                </li>)
            }
        </ul>
        <div>
            <span className={nameB=== 'all'?'activ': ''}>
            <Button  name={'All'} callback={ButtonAll}   />
        </span>
            <span className={nameB=== 'active'?'activ': ''}>
            <Button name={'Active'} callback={ButtonActive} />
                 </span>
            <span className={nameB=== 'completed'?'activ': ''}>
            <Button name={'Completed'} callback={ButtonCompleted} />
                 </span>
        </div>
    </div>

}
//nameB=== 'all'?'activ': nameB==='active'?'activ':nameB==='completed'?'activ':''