import React from 'react';

type ButtonProps={
    name:string
    callback:()=>void
}
export const Button=(props:ButtonProps)=>{
  const  onclickButton = ()=>{
        props.callback()
    }
    return <button onClick={onclickButton}>{props.name} </button>
}