
import {v1} from "uuid";
import {TasksStateType} from "../App";
import {addTaskAC, changeStatusAC, changeTaskTitleAC, reducerTask, removeTaskAC} from "./task-reducer";


test('add task for state',()=>{
    let tasks:  TasksStateType={
        ['TD1']: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ['TD2']: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }

    const action=addTaskAC('TD2', "Apple")
    let newState= reducerTask(tasks, action)
    expect(newState['TD2'].length).toBe(3)
    expect(newState['TD2'][2].title).toBe("Apple")
    expect(newState['TD1'].length).toBe(2)

})

test('remove task for state',()=>{
    let tasks:  TasksStateType={
        ['TD1']: [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true}
        ],
        ['TD2']: [
            {id: '1', title: "Milk", isDone: true},
            {id: '2', title: "React Book", isDone: true}
        ]
    }

    const action=removeTaskAC('TD2',"2" )
    let newState= reducerTask(tasks, action)
    expect(newState['TD2'].length).toBe(1)
    expect(newState['TD2'][0].title).toBe("Milk")
    expect(newState['TD1'].length).toBe(2)

})

test('change task status for state',()=>{
    let tasks:  TasksStateType={
        ['TD1']: [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true}
        ],
        ['TD2']: [
            {id: '1', title: "Milk", isDone: true},
            {id: '2', title: "React Book", isDone: true}
        ]
    }

    const action=changeStatusAC('TD2',"2", false )
    let newState= reducerTask(tasks, action)
    expect(newState['TD2'].length).toBe(2)
    expect(newState['TD2'][1].isDone).toBe(false)
    expect(newState['TD1'][1].isDone).toBe(true)

})

test('change title task for state',()=>{
    let tasks:  TasksStateType={
        ['TD1']: [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true}
        ],
        ['TD2']: [
            {id: '1', title: "Milk", isDone: true},
            {id: '2', title: "React Book", isDone: true}
        ]
    }

    const action=changeTaskTitleAC('TD1',"1", 'done' )
    let newState= reducerTask(tasks, action)
    expect(newState['TD1'].length).toBe(2)
    expect(newState['TD1'][0].title).toBe('done')
    expect(newState['TD2'][1].title).toBe('React Book')

})


