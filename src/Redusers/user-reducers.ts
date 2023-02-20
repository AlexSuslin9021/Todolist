import React from 'react';

type StateType = {
    age: number
    childrenCount: number
    name?: string
}
type ActionType = {
    type: string
    newName?:string
    [key: string]: any
}

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const userReducers = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case "INCREMENT-AGE":
            return {...state, age: state.age + 1}
        case "INCREMENT-CHILDREN":
            return {...state, childrenCount: state.childrenCount + 1}
        case 'NEWNAME':
            return {...state, name:action.newName}
        default:
            throw new Error("I don't understand this type")
    }

};

