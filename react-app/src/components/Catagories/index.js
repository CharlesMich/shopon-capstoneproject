import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom'
import './catagories.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import {getAllCatagories} from "../../store/catagories"
import { getAllProducts } from "../../store/product";

function Catagories(){
    const dispatch = useDispatch()
    const history = useHistory()

    const sessionUser = useSelector(state=> state.session.user)
    const catagories = useSelector(state=> Object.values(state.catagory.allCatagories))
    const allProducts = useSelector(state => Object.values(state.product.allProducts))
    
    useEffect(()=> {
        dispatch(getAllCatagories())
    }, [dispatch])

    useEffect(()=> {
        dispatch(getAllProducts())
    }, [dispatch])

   
    

    if(!catagories) return null
    if (!sessionUser) return <Redirect to="/login" />;
   
    console.log(catagories)
    return(
        <div className="catagories-container">
            <div className="catagories-card">
            <div className="catagories-map">{catagories.map((ele)=> 
            <div>    
                        <div>{ele.catagory}</div>

                        <div className="catagories-product-map">
                            {allProducts.map((item)=> 
                           
                            <div className="catagories-product-map-each-element">
                                {ele.id === item.catagory_id && <img className="cat-img" src ={item.img1} alt=""></img>}
                                </div>
                               
                            )}
                         </div>
                        <Link to={`/products`} key={ele.id}>Product of Catagory</Link>
            </div>
            )}
            </div>
            </div>
        </div>
    )
   
    
}
export default Catagories