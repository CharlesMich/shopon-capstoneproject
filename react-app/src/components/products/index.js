import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import {getSingleCatagory} from "../../store/catagories"

import './products.css'



function AllProducts(){
    const dispatch = useDispatch()
    const history = useHistory()
    const {catagoryId} = useParams()

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product.allProducts))
    const catagory = useSelector((state=> (state.catagory.singleCatagory)))
    let newArr= allProducts.filter(ele => ele.catagory_id===Number(catagoryId))
   
    // console.log(catagory.catagory)

    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    useEffect(() => {
        dispatch(getSingleCatagory(catagoryId))
    },[dispatch]);



    if(!allProducts) return null

    if (!sessionUser) return <Redirect to="/login" />;

    return(
        <div className="product-container">
                <div className="product-sub-container">
                    <div style={{textAlign:"left"}}><h1 className="product-h1">{catagory && catagory.catagory}</h1></div>
                <div className='products-inner-container'>
                    <div className="productMap">{newArr.map((ele)=> 
                                        <div className="products-each-product">  
                                       
                                       <Link to={`/products/productdetails/${ele.id}`} key={ele.id}> <div className="products-name">{ele.name}</div>
                                                <div className="products-sub-name">{ele.product_shortdescription}</div>
                                                {<img className="products-cat-img" src ={ele.img1} alt=""></img>}
                                                <div className="products-sub-name">Price: {Number(ele.price).toFixed(2)}</div></Link> 
                                                
                                               
                                        </div> 
                    )}</div>
                </div>
                </div>
         
        </div>

    )
       

}

export default AllProducts