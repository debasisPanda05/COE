import React,{useState} from "react"

export const Todoform=({onAddtodo})=>{
    const[Inputvalue,setInputvalue]=useState({})
    
    const handleInput=(value)=>{
        setInputvalue({id:value,content:value,checked:false})
    }
   const handleSubmit=(event)=>{
    event.preventDefault()
     onAddtodo(Inputvalue)
     setInputvalue({id:"",content:"",checked:false})
   }
       
    return(
        <section className="form">
        <form onSubmit={handleSubmit}> 
          <div>
            <input
             type="text" 
            placeholder="Add a todo" 
            className="todo-input"
            autoComplete="off"
            value={Inputvalue.content}
            onChange={(e)=>handleInput(e.target.value)}
            />
            </div>
            <div>
               <button className="todo-btn" type="submit">Add</button>
            </div>
            </form>        
               </section>
    )
}