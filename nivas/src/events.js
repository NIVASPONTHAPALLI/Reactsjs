// function Events(){
//     const evn=()=>{
//         alert("hello...");
//     };
//     return(
//         <>
//         <h3>ganesh</h3>
//         <button onClick={evn}>click</button>
//         </>
//     )
// }
// export default Events
function Events(){
    let trainees=[{
        name:"nivas",
        rollno:124
    },{
        name:"sankar",
        rollno:432
    },{
        name:"sai",
        rollno:678
    }] 
    const evn=(name)=>{
        name.map((ele,i)=>{
            document.write(i+1+"."+ele.name+ele.rollno+"<br>");
        })
    };
    return(
        <>
        {/* <h3>ganesh</h3> */}
        <button onClick={()=>evn('ganesh')}>click</button>
        </>
    )
}
export default Event