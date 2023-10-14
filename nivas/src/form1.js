import { useState } from "react"
function Form1(){
    const [formData,setFormData]=useState({
        firstname:'',
        rollno:'',
         email:''
    })

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData)

    }

    return(
        <>
        <h1>This is for page</h1>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="firstname" value={formData.firsrname} onChange={(e) => setFormData({...formData, firstname: e.target.value})} /><br/>
            <label>Rollno</label>
            <input type="text" name="rollno" value={formData.rollno} onChange={(e) => setFormData({...formData, rollno: e.target.value})} /><br/>
            <label>E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /><br/>
            <input type="submit" name="submit" value="submit"/>
        </form>
        </>
    )
}

export default Form1