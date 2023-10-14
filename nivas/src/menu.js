import { Link } from "react-router-dom";

function Menu(){
    return(
        <div>
            <Link to="/">Home</Link>|
            <Link to="about">About</Link>|
            <Link to="service">Service</Link>|
            <Link to="contact">Contact</Link>|
            <Link to="trainees">Trainees</Link>|
            <Link to="student">Student</Link>|
            <Link to="count">Count </Link>|
            <Link to="event">Event</Link>|
            <Link to="form">Form1</Link>|
            <Link to="product">Product</Link>|
            <Link to="newproduct">NewProduct</Link>|
            <Link to="categories">Categories</Link>|
            <Link to="singleproduct">Singleproduct</Link>|
            
        </div>
    )
}
export default Menu