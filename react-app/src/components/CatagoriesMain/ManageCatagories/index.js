import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import '../../ProductsMain/ManageProducts'
import { useEffect } from 'react'
// import OpenModalButton from '../../OpenModalButton';
// import DeleteProductModal from '../DeleteProductModal';
// import UpdateProductModal from '../UpdateProductModal';
import { getAllCatagories } from '../../../store/catagories';

function ManageCatagory(){
    const dispatch = useDispatch()
   const allCatagories = useSelector(state => Object.values(state.catagory.allCatagories))
   const sessionUser = useSelector(state => state.session.user)
   const myCatagories = allCatagories.filter(ele => ele.seller === 'Shopon')

   useEffect(()=> {
    dispatch(getAllCatagories())
   }, [dispatch])

    return(
        <div className="manageproducts-container">
                <div className="manageproducts-subcontainer">
                    <h1 className ="manageproducts-h1">Manage your Catagories</h1>
                    <Link to='/manageproducts/createproduct' className='manageproduct-linkto-addproduct'>Add a Catagory</Link>
                    <h2 className="manageproducts-h2">My Catagories</h2>
                    <div>{myCatagories.map((ele)=>
                    <div className="manageproduct-each-product">
                        <div><img src ={ele.img} style={{width:"50px"}}></img></div>
                        <div>{ele.catagory}</div>
                        {/* <div>${Number(ele.price).toFixed(2)}</div> */}
                        {/* <Link to={`/manageproducts/updateproduct/${ele.id}`} className="manageproduct-button" id = {ele.id}>Edit</Link> */}
                        {/* <div><OpenModalButton buttonText="Update" className="review-button"  modalComponent={<UpdateProductModal id={ele.id} />} /></div> */}
                        {/* <div><OpenModalButton buttonText="Delete" className="manageproduct-button"  modalComponent={<DeleteProductModal productId={ele.id} />} /></div> */}
                    </div>
                    
                    )}</div>
            </div>
        </div>
    )
}

export default ManageCatagory;
