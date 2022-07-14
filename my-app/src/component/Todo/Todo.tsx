import { useState } from "react"
import { TodoInput } from "./TodoInput"
import { TOdoItem } from "./TodoItem"
import { uuid } from 'uuidv4';
interface ItodoItem{
    id:number,
    data:string,
    status:boolean

}

export const Todo=()=>{
    const [todo,setTodo]=useState<ItodoItem[]>([])
    const handleButton=(val:string)=>{
        const payload={
            id:Math.floor(Math.random()*100),
            data:val,
            status:true

        }
        setTodo([...todo, payload])

    }
    
    
    return (
        <div>
            <h1>Todo-App</h1>
            <TodoInput label="Add Item" onClick={handleButton}/>
            {todo.map((cv)=><TOdoItem key={cv.id} id={cv.id} value={cv.data}/>)}
            
            
            
        </div>
    )
}