interface Iheader{
    label: string
}
export const Header=({label}:Iheader)=>{
    return (
        <div>
            <h1>{label}</h1>
        </div>
    )
}