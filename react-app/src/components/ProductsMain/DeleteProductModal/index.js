import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import { fetchDeleteProduct, getAllProducts } from "../../../store/product";

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
            <h1>Confirm Delete</h1>
            <p>Are you sure you want to delete this Product</p>

            <button className="deleteButton" type="submit" onClick={handleSubmit}>Yes (Delete Product)</button>
            <button className="cancelButton" type="submit" onClick={handleCancel}>No (Keep Product)</button>
        </div>
    )
}

export default DeleteProductModal;
