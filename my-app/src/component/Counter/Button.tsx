interface Ibutton{
    label: string,
    onChange:()=>void,
}
export const Button=({label,onChange}:Ibutton)=>{
    return (
        <div>
            <button onClick={onChange}>{label}</button>
        </div>
    )
}