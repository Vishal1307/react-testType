interface ItodoItem{
    value: string
    id:number
    
    
}
export const TOdoItem=({id,value}:ItodoItem)=>{

    return (
        <div>
            <span>{id}</span>
            <span>---</span>
            <span>{value}</span>
            
        </div>
    )
}