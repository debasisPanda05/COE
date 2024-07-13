import React, { useState } from "react";
import './Todo.css'
 import { Todoform } from "./todoform";
import { Todolist } from "./todolist";
import { getlocaldata, setlocaldata } from "./localstorage";


export const Todo=()=>{

    
  
    const[task,setTask]=useState(()=>getlocaldata())

     const handleSubmit=(Inputvalue)=>{
        const{id,content,checked}=Inputvalue
        //check if input value is empty or not
         if(!content) return;
         // check if input value data is exist or not
         //if(task.includes(Inputvalue))  return
         const ifContentmatch =task.find(
            (currTask)=>currTask.content===content)
            if(ifContentmatch) return
        setTask((prevTask)=>[...prevTask,{id,content,checked}])
        
    }
        
    setlocaldata(task)
    
    const handleDelete=(value)=>{
        console.log(task)
        console.log(value)
        const updateTask=task.filter((currTask)=>currTask.content!==value);
        setTask(updateTask)
    }
    
        const handleClear=()=>{
            setTask([])
        }
       
        const handleCheck=(content)=>{
            const updateTask=task.map((currTask)=>{
                if(currTask.content===content){
                    return{...currTask,checked:!currTask.checked}
                }else{
                    return currTask
                }
            })
            setTask(updateTask)
        }

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <Todoform onAddtodo={handleSubmit}/>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask)=>{
                            return(
                                <Todolist key={currTask.id}
                                data={currTask.content}
                                checked={currTask.checked}
                                onCheck={handleCheck}
                                onHandledelete={handleDelete}/>
                            )
                        })}
                </ul>
                <button className="clear-btn"
                onClick={handleClear}>
                    clear all
               </button>
            </section>
        </section>
    )
}