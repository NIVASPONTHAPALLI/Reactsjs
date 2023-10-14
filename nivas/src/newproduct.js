import { useEffect,useState } from "react";
import axios from "axios"; // npm i axios
import { Link } from "react-router-dom";
import "./product.css";

import Productscard from "./productscard";

function NewProducts(){
    const [data,setData] = useState([]) // const data=[]
    const [cnt,setCnt] = useState(0) // const cnt=0
    const api = 'https://fakestoreapi.com/products';
    
    useEffect(()=>{
        getProductlist()
    },[cnt])
    //way1 .without [] means multiple times
    //way2. [] means one time
    //way3. [cnt] means inside the function call based on "cnt" value 
    const getProductlist = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return (
        <>
            <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt+1)}>count</button>
            <div className="products-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card">
                         
                            <img src={ele.image} />
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div>                        
                    )
                })
            }
            </div>
        </>
    )
}
export default NewProducts

// import React, { useState, useEffect } from 'react';
// import './product.css';

// function NewProducts() {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch categories from the fake store API
//     fetch('https://fakestoreapi.com/products/categories')
//       .then((response) => response.json())
//       .then((data) => setCategories(data))
//       .catch((error) => console.error('Error fetching categories:', error));
//   }, []);

//   const fetchProductsByCategory = (category) => {
//     // Fetch products by category from the fake store API
//     fetch(`https://fakestoreapi.com/products/category/${category}`)
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error(`Error fetching products for ${category}:`, error));
//   };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     fetchProductsByCategory(category);
//   };

//   return (
//     <div>
//       <h1>Categories</h1>
//       <div className="category-buttons">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategoryClick(category)}
//             className={selectedCategory === category ? 'active' : ''}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="products-list">
//         {products.map((product) => (
//           <div key={product.id} className="card">
//             <img src={product.image} alt={product.title} />
//             <h3>{product.title}</h3>
//             <p>${product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default NewProducts;