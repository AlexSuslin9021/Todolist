// import {v1} from "uuid";
// import {TasksStateType, TodolistType} from "../App";
// import {addTaskAC, changeStatusAC, changeTaskTitleAC, reducerTask, removeTaskAC} from "./task-reducer";
// import {AddTodolistAC} from "./todolists-reducer";
//
//
// test('add task for state', () => {
//     let tasks: TasksStateType = {
//         ['TD1']: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true}
//         ],
//         ['TD2']: [
//             {id: v1(), title: "Milk", isDone: true},
//             {id: v1(), title: "React Book", isDone: true}
//         ]
//     }
//     let todo: TodolistType[] = []
//
//     const action = AddTodolistAC('TD3')
//     const newState = reducerTask(tasks, action)
//     const keys = Object.keys(newState)
//     const newKey = keys.find(k => k != 'TD1' && k != 'TD2')
//     if (!newKey) {
//         throw Error('new key should be added')
//     }
//
//     expect(keys.length).toBe(3)
//     expect(newState[newKey]).toEqual([])
//
// })





