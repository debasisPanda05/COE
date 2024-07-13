
const tkey="todo"

export const getlocaldata=()=>{
    const rawTool=localStorage.getItem(tkey)
    if(!rawTool) return []
    return JSON.parse(rawTool)
}

export const setlocaldata=(task)=>{
     return localStorage.setItem(tkey,JSON.stringify(task))
}