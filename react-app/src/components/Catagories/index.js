import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
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

    console.log(catagories)
    return(
        <div className="catagories-container">
            <div className="catagories-map">{catagories.map((ele)=> 
            <div>    
                        <div>{ele.catagory}</div>

                        <div className="catagories-product-map">
                            {allProducts.map((item)=> 
                            <div>
                                <div>{ele.id === item.catagory_id && item.name}</div>
                                <div>{ele.id === item.catagory_id && <img src ={item.img1} alt=""></img>}</div>
                                </div>
                            )}
                         </div>
                        <Link to={`/products`} key={ele.id}>Product of Catagory</Link>
            </div>
            )}
            </div>
        </div>
    )
   
    
}
export default Catagories