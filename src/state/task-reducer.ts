import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type removeTodolistActionType = {
    type: 'REMOVE-TASK'
    todolistId:string
    taskID:string


}
export type AddTaskActionType = {
    type:'ADD-TASK',
    todolistId:string
    taskID:string
    title:string

}
export type ChangeTaskActionType = {
    type: 'CHANGE-STATUS'
    todolistId:string
    taskID:string,
    isDone: boolean

}
export type ChangeTaskTitle = {
    type: 'CHANGE-TITLE'
    todolistId:string
    taskID:string,
    title: string

}

type ActionsType = removeTodolistActionType | AddTaskActionType | ChangeTaskActionType | ChangeTaskTitle
    | AddTodolistActionType | RemoveTodolistActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskID)}
        }

        case 'ADD-TASK': {
            let newTask={id:action.taskID, title:action.title, isDone:false}
            return {...state, [action.todolistId]: [...state[action.todolistId], newTask]}
        }
        case 'CHANGE-STATUS': {

            return {
                ...state,[action.todolistId]:state[action.todolistId].map(t=>t.id ? {...t, isDone:action.isDone} : t)
            }
        }
        case 'CHANGE-TITLE': {

            return {
                ...state,[action.todolistId]:state[action.todolistId].map(t=>t.id ? {...t, title:action.title} : t)
            }
        }
        case 'ADD-TODOLIST':{
            return {...state,[action.tID]:[]}
        }
        case 'REMOVE-TODOLIST':{
            const copyState={...state}
           delete copyState[action.id]
            return copyState
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskID:string, todolistId: string):removeTodolistActionType=> {
return{
    type:'REMOVE-TASK',
    todolistId,
    taskID
} as const
}
export const addTaskAC = (taskID:string, todolistId: string, title:string) => {
    return{
        type:'ADD-TASK',
        todolistId,
        taskID,
        title
    } as const
}
export const changeTodolistTitleAC = (todolistId: string,  taskID: string, isDone:boolean)=> {

    return {
        type: 'CHANGE-STATUS',
        todolistId,
        taskID,
        isDone,
    } as const
}
export const changeTaskTitleAC = (todolistId: string,  taskID: string,title:string) => {
    return {
        type: 'CHANGE-TITLE',
        todolistId,
        taskID,
        title,
    } as const
}
