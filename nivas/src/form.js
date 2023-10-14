import { useState } from "react"

function Form(){
    const [name,setName]=useState('')
    const [rollno,setRollno]=useState('')
  
    function handleSubmit(event){
        event.preventDefault()
        console.log(name)
        console.log(rollno)
    }
    return(
        <>
        <h1>This is for page</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="firstname" onChange={(e)=>setName(e.target.value)}/><br/>
            <label>Rollno</label>
            <input type="text" name="Rollno"  onChange={(e)=>setRollno(e.target.value)}/><br/>
            <input type="submit" name="submit" value="submit"/>
        </form>
        </>
    )
}
export default Form