//import cine from './cine2.jpg';
function Home(){
    //internal css
    let ss={
        background:'pink',
        color:'violet',
        marginTop:'50px' //don't use margin-top
    }
    return(
        <div style={ss}>
            <h1>This is home page</h1>
        </div>
    )
    // return(
    //     <>
    //     <center>
    //     <h1>This is my home page</h1>
    //     <img src={require("./cine1.jpg")} ></img><br></br>
    //     <img src={cine} alt='cinema' ></img><br></br>
    //     {/* <img src="./cine1.jpg"></img> */}
    //     </center>
    //     </>
    // )
}
export default Home 