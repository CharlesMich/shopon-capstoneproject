import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getSingleProduct } from "../../store/product";


function ProductDetails(){
    const dispatch = useDispatch()
    const history = useHistory()
    const id = useParams().productId
   
   let sessionUser = useSelector((state)=> state.session.user);
   // if(!sessionUser) history.push('/')
   const userId = sessionUser.id
   let product = useSelector((state)=> state.product)
   console.log(id)
   
   const { productId } = useParams()
   console.log(productId)
   

    useEffect(() => {
        dispatch(getSingleProduct(3))
    },[dispatch, 3]);


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
                <div>{ele.price}</div>
                <div>{ele.product_longdescription}</div>
                <Link to={`/cart/${userId}`}>Add to Cart</Link>
                </div>
              )}</div>

        </div>

      
    )
       

}

export default ProductDetails