import React,{Component} from "react"

class about extends Component{
    render(){
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
        return(
            <div>
                <table border={1} cellSpacing={0} align="center" width={'200px'}>
                <tr><th>S.No</th><th>Name</th><th>Roll No</th></tr>
            {
                trainees.map((ele,i)=>{
                    return(<Component index={i} name={ele.name} rollno={ele.rollno}/>)
                })
            }
                </table>
            </div>
        )
    }
}
export default about