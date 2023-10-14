import { useState } from "react"
import apple from './apple.jpg';
import banana from './banana.jpg';
import orange from './orange.jpg';
 function Hooks1(){
//     // let intial=[10,20,30,50]
//     // const [arr,setarr]=useState([10,20,30,50])
    const [arr,setarr]=useState(['apple','banana','orange'])
    const [fruitname,setfruitname]=useState('')
    const filterfruits=()=>{
        console.log(arr)
        console.log(fruitname)
        let filteredarray=arr.filter((ele)=>{
            return(ele===fruitname)
        })
        // console.log(filteredarray)
        if(filteredarray.length==0){
            setarr(['apple','banana','orange'])
        }else{
            setarr(filteredarray)
        }

    }

    return(
        <div>
        <input type="text" onChange={(e)=>setfruitname(e.target.value)}/>
         <button onClick={filterfruits}>Check Fruits</button><br/>
         <ul>{
            arr.map((ele,i)=>{
                return(<li>{ele}</li>)
            })
         }
         </ul>
         </div>
    )
}

export default Hooks1


 // return(
        // <div>
        // <h3>Fruits Market</h3>
        // <input type="text" onChange={(e)=>setfruitname(e.target.value)}/>
        // <button onClick={filterfruits}>Check Fruits</button><br/>
        
        // arr.map((ele,i)=>{
        //     return( key={<img src="ele"></img>)
        // }) 
        // </div>
      
   // )
//}

// export default Hooks1