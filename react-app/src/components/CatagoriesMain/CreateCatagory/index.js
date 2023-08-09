import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAddCatagory} from '../../../store/catagories'
import "../../ProductsMain/CreateProducts/createproducts.css"

function CreateCatagory() {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state=> state.session.user)
    let seller;
    if(sessionUser){
        seller = sessionUser.username;
    }

    const [catagory, setCatagory] = useState('');
    const [img, setImg] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);

    useEffect(() => {
        const errors = {};
        if (catagory.length === 0) errors.name = 'Catagory is required';
        if (catagory.length > 100) errors.name = 'Catagory must be 100 characters or less';
        if (!img) errors.img = 'Image is required';
        setValidationErrors(errors);
    }, [catagory, img])

    const handleCancel =()=>{
        history.push('./managecatagories')
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("catagory", catagory);
        formData.append("seller", seller);
        formData.append("img", img);
    
        setHasSubmitted(true);
        if (Object.keys(validationErrors).length > 0) return;
        
        setImageLoading(true);
        let newCatagory = await dispatch(fetchAddCatagory(formData))
        
        if (newCatagory) {
            setCatagory('');
            setImg(null);
            setImageLoading(false);
             history.push("/managecatagories");
                }
    }
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <div className="createproduct-container">
            <div className="createproduct-subcontainer">
            <div>
                <h2 className="createproduct-h2">Add a New Catagory</h2>
            </div>

            <form onSubmit={onSubmit}>
                <span><label htmlFor='create-product-name' className="createproduct-label">Catagory* </label></span><span className='error'> {hasSubmitted && validationErrors.catagory && `${validationErrors.catagory}`}</span>
                <input id='create-product-name' placeholder='Name of Catagory' type="text" value={catagory}
                    onChange={(e) => setCatagory(e.target.value)} />

                <h3 className="createproduct-h3">Add a cover photo of your catagory</h3>

                <span><label htmlFor='img' className="createproduct-label">Image*</label></span><span className='error'> {hasSubmitted && validationErrors.img && `${validationErrors.img}`}</span>
                <input id='img' type="file" 
                    onChange={(e) => setImg(e.target.files[0])}/>

                <button
                    type="submit"
                    className="createproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px" }}>Create Catagory</button>
                <button
                    onClick={handleCancel}
                    className="createproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px", backgroundColor:"black", }}>Cancel</button>    
                     {(imageLoading)&& <p>Loading...</p>}
            </form >
            </div>

        </div>
    )
}

export default CreateCatagory