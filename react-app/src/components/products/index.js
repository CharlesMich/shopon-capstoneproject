import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";

import './products.css'



function AllProducts(){
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product.allProducts))
    


    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    if(!allProducts) return null

    return(
        <div className="product-container">
           
                <div className='products-inner-container'>
                    <div className="productMap">{allProducts.map((ele)=> 
                                        <div className="products-each-product">  
                                       
                                       <Link to={`/products/${ele.id}`} key={ele.id}> <div className="products-name">{ele.name}</div></Link> 
                                                <div>{ele.product_shortdescription}</div>
                                                <div>{<img className="cat-img" src ={ele.img1} alt=""></img>}</div>
                                                <div>{ele.price}</div>
                                               
                                        </div> 
                    )}</div>
                </div>
         
        </div>

    )
       

}

export default AllProducts