function Student(props){
    let name='Nivas Ponthapalli'
    return(
        <>
            <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td></tr>
        </>
    )
}
export default Student

// import { trainee } from "./person";

// function Student({Trainees}){
//     //let name='NAVEEN'
  
//     return(
//       <div style={{marginTop:'30px'}}>
//         <div>
//         {Trainees.map((trainee,index)=>(
//           <h6 key={index}>{trainee.name}-{trainee.roll}</h6>
          
//         ))}
//         </div>
        
        
//       </div>
//     );
// }
// export default Student;s