import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import { fetchDeleteProduct, getAllProducts } from "../../../store/product";
import './deleteproductmodal.css'

function DeleteProductModal({ productId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    const history = useHistory()
    const userId = useSelector(state => state.session.user.id)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchDeleteProduct(productId)).then(dispatch(getAllProducts())).then(dispatch(getAllProducts())).then(closeModal)
    }

    const handleCancel = (e) => {
        closeModal()
    }

    return (
        <div className="container1">
            <h1 className="product-delete-h1">Confirm Delete</h1>
            <p className="product-delete-p">Are you sure you want to delete this Product</p>

            <div><button className="deleteButton" type="submit" onClick={handleSubmit}>Yes (Delete Product)</button></div>
            <div><button className="cancelButton" type="submit" onClick={handleCancel}>No (Keep Product)</button></div>
        </div>
    )
}

export default DeleteProductModal;
