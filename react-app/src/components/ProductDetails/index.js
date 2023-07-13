import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getSingleProduct } from "../../store/product";


function ProductDetails(){
    const dispatch = useDispatch()
    const history = useHistory()
    const id = useParams()

    let sessionUser = useSelector((state)=> state.session.user);
    // if(!sessionUser) history.push('/')
    
   
    let product = useSelector((state)=> state.product)

    console.log(product)

    useEffect(() => {
        dispatch(getSingleProduct(id))
    },[dispatch, id]);


    let productArr = Object.values(product)

    if(!product || !productArr) return null
    if(!sessionUser) return null
    return(
        <div className="product-container">
            <div>Hello from single product</div>
              <div className="productMap">{productArr.map((ele)=> 
              <div>
                <div>{ele.id}</div>
                <div>{ele.name}</div>
                <div>{ele.product_shortdescription}</div>
                <Link to="/">Shopping Cart</Link>
                </div>
              )}</div>

        </div>

      
    )
       

}

export default ProductDetails