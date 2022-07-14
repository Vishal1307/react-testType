import { useState } from "react"
import { Button } from "./Button"
import { Header } from "./Header"

export const Counter=()=>{
    const [count,setCount]=useState(0)
    const handleButton=(value:number)=>{
        setCount((pev)=>pev+value)

    }
    return (
        <div>
            <Header label="counter-app"/>
            <Header label={`${count}`}/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                
            }}>
                <Button label="Increment" onChange={()=>handleButton(1)}/>
                <Button label="Decrement" onChange={()=>handleButton(-1)}/>

            </div>
        </div>
    )
}