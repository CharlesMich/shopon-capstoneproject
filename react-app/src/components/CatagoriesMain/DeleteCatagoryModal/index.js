import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../../context/Modal";
import { useHistory } from "react-router-dom";
import { fetchDeleteCatagory, getAllCatagories } from "../../../store/catagories";
import '../../ProductsMain/DeleteProductModal/deleteproductmodal.css'

function DeleteCatagoryModal({ catagoryId }) {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
   
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchDeleteCatagory(catagoryId)).then(dispatch(getAllCatagories())).then(dispatch(getAllCatagories())).then(closeModal)
    }

    const handleCancel = (e) => {
        closeModal()
    }

    return (
        <div className="container1">
            <h1 className='product-delete-h1'>Confirm Delete</h1>
            <p className='product-delete-p'>Are you sure you want to delete this Catagory</p>

            <button className="deleteButton" type="submit" onClick={handleSubmit}>Yes (Delete Catagory)</button>
            <button className="cancelButton" type="submit" onClick={handleCancel}>No (Keep Catagory)</button>
        </div>
    )
}

export default DeleteCatagoryModal;
