import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getAllProducts } from "../../store/product";


function AllProducts(){
    const dispatch = useDispatch()
    const history = useHistory()

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product))

   

    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    if(!allProducts) return null

    return(
        <div className="product-container">
            <div>Hello from all products</div>
              <div className="productMap">{allProducts.map((ele)=> 
              <div>
                    <div>{ele.id}</div>
                    <div>{ele.name}</div>
                    <div>{ele.product_shortdescription}</div>
                    <Link to={`/products/product-details/${ele.id}`} key={ele.id}>Product Details</Link>
                   
                </div>
              )}</div>

        </div>

      
    )
       

}

export default AllProducts