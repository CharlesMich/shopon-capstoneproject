import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom'
import './catagories.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {getAllCatagories} from "../../store/catagories"
import { getAllProducts } from "../../store/product";
import { fetchLoadCartItem } from "../../store/cartproduct";


function Catagories(){
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state=> state.session.user)
    const catagories = useSelector(state=> Object.values(state.catagory.allCatagories))
    const allProducts = useSelector(state => Object.values(state.product.allProducts))
    const cartItems = useSelector(state => Object.values(state.cartProducts))

    let user_id;
    if(sessionUser){
        user_id = sessionUser.id
    }
    
    useEffect(()=> {
        dispatch(getAllCatagories())
    }, [dispatch])

    useEffect(()=> {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(()=> {
        dispatch(fetchLoadCartItem(user_id))
    }, [dispatch, user_id])

    

   
    

    if(!catagories) return null
    if (!sessionUser) return <Redirect to="/login" />;
   
    console.log(catagories)
    // return(
    //     <div className="catagories-container">
    //         <div className="catagories-card">
    //         <div className="catagories-map">{catagories.map((ele)=> 
    //         <div>    
    //                     <div>{ele.catagory}</div>

    //                     <div className="catagories-product-map">
    //                     <div className="catagories-product-map-each-element">
    //                         {<img src={allProducts.find(ele.catagory_id === ele.id).img1}></img>}
    //                        </div>
    //                      </div>
    //                     <Link to={`/products`} key={ele.id}>Product of Catagory</Link>
    //         </div>
    //         )}
    //         </div>
    //         </div>
    //     </div>
    // )
   
    return(
        <div className="catagories-container">
            <div className="catagories-card">
            <div className="catagories-map">{catagories.map((ele)=> 
             <Link to={`/products/all/${ele.id}`} catagoryId={ele.id}><div class="catagories-each-card">    

                        <div>{<img className="cat-img" src={ele.img}></img>}</div>
                        <h2 className= "catagories-h1">{ele.catagory}</h2>
                      
            </div> </Link>
            )}
            </div>
            </div>
        </div>
    )
    
}
export default Catagories