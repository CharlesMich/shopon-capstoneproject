import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import '../../ProductsMain/ManageProducts'
import { useEffect } from 'react'
import OpenModalButton from '../../OpenModalButton';
import DeleteCatagoryModal from '../DeleteCatagoryModal';
import { getAllCatagories } from '../../../store/catagories';
// import '../../ProductsMain/DeleteProductModal/deleteproductmodal.css'
import "./managecatagories.css"

function ManageCatagory(){
    const dispatch = useDispatch()
   const allCatagories = useSelector(state => Object.values(state.catagory.allCatagories))
   const sessionUser = useSelector(state => state.session.user)
   const myCatagories = allCatagories.filter(ele => ele.seller === sessionUser.username)

   useEffect(()=> {
    dispatch(getAllCatagories())
   }, [dispatch])

    return(
        <div className="manageproducts-container">
                <div className="manageproducts-subcontainer">
                    <h1 className ="manageproducts-h1">Manage your Catagories</h1>
                    <Link to='/managecatagories/createcatagory' className='manageproduct-linkto-addproduct'>Add a Catagory</Link>
                    <h2 className="manageproducts-h2">My Catagories</h2>
                    <div>{myCatagories.map((ele)=>
                    <div className="manageproduct-each-product">
                        <div><img src ={ele.img} style={{width:"50px"}}></img></div>
                        <div>{ele.catagory}</div>
                        {/* <div>${Number(ele.price).toFixed(2)}</div> */}
                        <div className="manage-catagories-update-delete">
                        <Link to={`/managecatagories/updatecatagory/${ele.id}`} className="manageproduct-button" catagoryId = {ele.id}>Edit</Link>
                         {/* <div><OpenModalButton buttonText="Update" className="review-button"  modalComponent={<UpdateProductModal id={ele.id} />} /></div> */}
                        <div><OpenModalButton buttonText="Delete" className="manageproduct-button"  modalComponent={<DeleteCatagoryModal catagoryId={ele.id} />} /></div>
                        </div>
                    </div>
                    
                    )}</div>
            </div>
        </div>
    )
}

export default ManageCatagory;
