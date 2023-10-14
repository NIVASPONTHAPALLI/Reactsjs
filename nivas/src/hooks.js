import { useState } from "react"
function Hooks(){
    const [cnt,setCnt]=useState(0)
    const [name,setname]=useState('')
    return(
        <div>
            <h1>React Hooks</h1>
            <p>Count is: {cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>Increment by 1</button><br/>
            <button onClick={()=>setCnt(cnt-1)}>Decrement by 1</button><br/>
            <input type="text" onChange={(e)=>setname(e.target.value)}/>
            <p>the name is:{name}</p>
        </div>
    )
}

export default Hooks