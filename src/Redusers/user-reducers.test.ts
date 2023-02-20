import {userReducers} from "./user-reducers";

test('add age value plus one',()=>{
    const user={name:"Alex", age:30, childrenCount:1}

    let newState=userReducers(user, {type:"INCREMENT-AGE"})

    expect(newState.age).toBe(31)
    expect(newState.childrenCount).toBe(1)
})
test('add age children',()=>{
    const user={name:"Alex", age:30, childrenCount:1}

    let newState=userReducers(user, {type:"INCREMENT-CHILDREN"})

    expect(newState.age).toBe(30)
    expect(newState.childrenCount).toBe(2)
})

test('Change name',()=>{
    const user={name:"Alex", age:30, childrenCount:1}

    let newState=userReducers(user, {type:"NEWNAME", newName:'Nikita'})

    expect(newState.name).toBe("Nikita")

})