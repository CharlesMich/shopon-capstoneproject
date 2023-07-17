import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";

import './products.css'



function AllProducts(){
    const dispatch = useDispatch()
    const history = useHistory()
    const {catagoryId} = useParams()

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product.allProducts))
    let newArr= allProducts.filter(ele => ele.catagory_id===Number(catagoryId))
   


    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    if(!allProducts) return null

    return(
        <div className="product-container">
           
                <div className='products-inner-container'>
                    <div className="productMap">{newArr.map((ele)=> 
                                        <div className="products-each-product">  
                                       
                                       <Link to={`/products/productdetails/${ele.id}`} key={ele.id}> <div className="products-name">{ele.name}</div>
                                                <div className="products-sub-name">{ele.product_shortdescription}</div>
                                                {<img className="products-cat-img" src ={ele.img1} alt=""></img>}
                                                <div className="products-sub-name">Price: {ele.price}</div></Link> 
                                               
                                        </div> 
                    )}</div>
                </div>
         
        </div>

    )
       

}

export default AllProducts