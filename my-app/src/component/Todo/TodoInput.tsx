import { useState } from "react"

interface ITodoInput{
    label: string
    onClick:(val:string) => void
    
    
}
export const TodoInput=({label,onClick}:ITodoInput)=>{
    const [text,setText]=useState("")
    
    

    return (
        <div>
            <input type="text" name="" id=""  onChange={(e)=>setText(e.target.value)}  />
            <button onClick={()=>{
                onClick(text)
            }}>Add</button>
        </div>
    )
}