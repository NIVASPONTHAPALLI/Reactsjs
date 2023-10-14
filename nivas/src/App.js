 import logo from './logo.svg';
import './App.css';//external css
 import Home from './home';
import About from './about';
import Contact from './contact';
import Service from './service';
// import {a} from './person';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Menu from './menu';
import Trainees from './trainees';
import Student from './student';
import Count from './count';
import Event from './event';
// import Favouritecolor from './favouritecolor';
// import Color from './colorchange';
import React from 'react';
import Form from './form';
import Form1 from './form1';
// import {ReactComponentelement as cinema}from './cine1.jpg';
// import Hooks from './hooks';
// import Hooks1 from './hooks1';
// import Hooks2 from './hooks2';
import Product from './Product';
import NewProduct from './newproduct';
import Categories from './categories';
import Singleproduct from './singleprodut';
 function App() {
   return(
    <div className='App'>
     { <BrowserRouter>
     <Menu/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='about' element={<About name='Ponthapalli'/>} /> 
        <Route path='contact' element={<Contact/>} /> 
        <Route path='service' element={<Service/>} /> 
        <Route path='student' element={<Student/>} /> 
        <Route path='trainees' element={<Trainees/>} /> 
        <Route path='count' element={<Count/>} /> 
        <Route path='event' element={<Event/>} /> 
        <Route path='form1' element={<Form1/>} />
        <Route path='product' element={<Product/>} /> 
        <Route path='newproduct' element={<NewProduct/>} />
        <Route path='categories' element={<Categories/>} />
        <Route path='singleproduct' element={<Singleproduct/>} />
       </Routes>
      </BrowserRouter> }
       {/* <Favouritecolor/> */}
       {/* <Hooks2/> */}
      
     </div>
   )
 }
 export default App;

// // function App(){
// //   return(
// //     <div className='App'>
// //       <Color/>
// //     </div>
// //   )
// // }









// import './App.css';
// import Home from './home';
// import About from './about';
// import Services from './services';
// import Contacts from './contacts';
// import Menu from './menu';
// //import Student from './student';
// import Trainees from './trainees';

// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Events from './events';

// function App(){
//   return( 
//   <div className='App'>
//     <BrowserRouter>
//     <Menu/>
//     <Routes>
//       <Route path='/home' element={<Home/>}/>
//       <Route path='/about' element={<About/>}/>
//       <Route path='/services' element={<Services/>}/>
//       <Route path='/contacts' element={<Contacts/>}/>
//       <Route path='/trainees' element={<Trainees/>}/>
//       <Route path='/events' element={<Events/>}/>
//     </Routes>
//     </BrowserRouter>
//     </div>
//   )
    

// }
// export default App;
// import UserProfile from './index';

// const userDetails={
//   name:"sai",
//   role:"Fsd developer"
// }
// const = ()=>{
//   return(


//   )
// }

// export default App

// import React, { useState } from 'react';

// function  App() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     if(count<10){
//     setCount(count + 1);}
//   };

//   const decrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <div>
//       <center>
//       <h1>Counter: {count}</h1>
//       <span>Adding 1 to the count: </span>
//       <button onClick={increment} style={{color:"red",borderRadius:"80px"}}>Increment</button><br/><br/>
//       <span>Subtract 1 to the count: </span>
//       <button onClick={decrement} style={{color:"blue",borderRadius:"80px"}}>Decrement</button>
      
//       </center>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState('white');

//   const changeBackgroundColor = () => {
//     const colors = ['red', 'blue', 'green', 'yellow', 'purple','black','pink','grey'];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     setBackgroundColor(randomColor);
//   };

//   return (
//     <div  style={{ backgroundColor }} >
//       <h1>Full Stack</h1>
//       <button onClick={changeBackgroundColor}>Change Background Color</button>
//     </div>
//   );
// }

// export default App;