import { MdCheck, MdDelete } from "react-icons/md"

export const Todolist=({data,checked,onHandledelete,onCheck})=>{
    return(
        <li className="todo-item">
        <span className={checked?"checkList":"notCheckList"}>
            {data}
        </span>
<button className="check-btn" onClick={()=>onCheck(data)}><MdCheck/></button>
<button className="delete-btn"
onClick={()=>onHandledelete(data)}>
< MdDelete /></button>
    </li>
    )
}