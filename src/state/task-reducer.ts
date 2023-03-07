import React from 'react';
import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";


type ActionType = AddTaskType | RemoveTaskType |ChangeStatusType | ChangeTaskTitleType | AddTodolistActionType | RemoveTodolistActionType

export const reducerTask = (state: TasksStateType, action: ActionType):TasksStateType => {
    switch (action.type) {
        case "ADD-TASK":
            const newTask = {id: v1(), title: action.title, isDone: true}
            return {...state, [action.id]: [...state[action.id], newTask]}
        case "REMOVE-TASK":
            return {...state, [action.id]: state[action.id].filter(el=>
                el.id!=action.idTask)}
        case 'CHANGE-TASK':
            return {...state, [action.id]: state[action.id].map(el=>
                    el.id===action.idTask ? {...el, isDone:action.isDone}: el)}
        case "CHANGE-TITLE":
            return {...state,[action.id]:state[action.id].map(el=>
                el.id===action.idTask ?{...el, title: action.title} : el) }
        case "ADD-TODOLIST":
            return {...state,[action.id]: []}
        case "REMOVE-TODOLIST":
           let copyState={...state}
            delete copyState [action.id]
            return copyState

        default:
            throw new Error("I don't understand this type")
    }
}
type AddTaskType = {
    type: 'ADD-TASK',
    id: string
    title: string
}
export const addTaskAC = (id: string, title: string) => {
    return {
        type: 'ADD-TASK',
        id,
        title
    } as const
}
type RemoveTaskType = {
    type: 'REMOVE-TASK',
    id: string
    idTask:string
}
export const removeTaskAC = (id: string, idTask:string) => {
    return {
        type: 'REMOVE-TASK',
        id,
        idTask,

    } as const
}
type ChangeStatusType = {
    type: 'CHANGE-TASK',
    id: string
    idTask:string
    isDone:boolean
}
export const changeStatusAC = (id: string, idTask:string, isDone:boolean):ChangeStatusType => {
    return {
        type: 'CHANGE-TASK',
        id,
        idTask,
        isDone

    } as const
}

type ChangeTaskTitleType = {
    type: 'CHANGE-TITLE',
    id: string
    idTask:string
  title:string
}
export const changeTaskTitleAC = (id: string, idTask:string, title:string):ChangeTaskTitleType => {
    return {
        type: 'CHANGE-TITLE',
        id,
        idTask,
        title

    } as const
}