import {Link} from 'react-router-dom'
import './manageproducts.css'

function ManageProducts(){
    return(
        <div className="manageproducts-container">
            <div className="manageproducts-subcontainer">
        <h1 className ="manageproducts-h1">Manage your Products</h1>
        <Link to='/manageproducts/createproduct' className='manageproduct-linkto-addproduct'>Add a Product</Link>

        </div>
        </div>
    )
}

export default ManageProducts;
