import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import './manageproducts.css'
import OpenModalButton from '../../OpenModalButton';
import DeleteProductModal from '../DeleteProductModal';
import UpdateProductModal from '../UpdateProductModal';
import { getAllProducts } from '../../../store/product';

function ManageProducts(){
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
   const allProducts = useSelector(state => Object.values(state.product.allProducts))
   const username = useSelector(state => state.session.user.username)
   const myProducts = allProducts.filter(ele => ele.seller === username)
   console.log(myProducts)

   useEffect(()=> {
    dispatch(getAllProducts())
   }, [dispatch])

   if (!sessionUser) return <Redirect to="/login" />;

    return(
        <div className="manageproducts-container">
                <div className="manageproducts-subcontainer">
                    <h1 className ="manageproducts-h1">Manage your Products</h1>
                    <Link to='/manageproducts/createproduct' className='manageproduct-linkto-addproduct'>Add a Product</Link>
                    <h2 className="manageproducts-h2">My Products</h2>
                    <div>{myProducts.map((ele)=>
                    <div className="manageproduct-each-product">
                        <div><img src ={ele.img1} style={{width:"50px"}}></img></div>
                        <div className="manage-products-name-price">
                        <p>{ele.name}</p>
                        <p>${Number(ele.price).toFixed(2)}</p>
                        </div>
                        <div className="manage-catagories-update-delete">
                        <Link to={`/manageproducts/updateproduct/${ele.id}`} className="manageproduct-button" id = {ele.id}>Edit</Link>
                        {/* <div><OpenModalButton buttonText="Update" className="review-button"  modalComponent={<UpdateProductModal id={ele.id} />} /></div> */}
                        <div><OpenModalButton buttonText="Delete" className="manageproduct-button"  modalComponent={<DeleteProductModal productId={ele.id} />} /></div>
                        </div>
                    </div>
                    
                    )}</div>
            </div>
        </div>
    )
}

export default ManageProducts;
