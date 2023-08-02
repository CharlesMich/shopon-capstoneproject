import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateCatagory, getAllCatagories } from "../../../store/catagories";
import '../../ProductsMain/UpdateProductModal/updateproductmodal.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function UpdateCatagory() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { catagoryId } = useParams()
   
    const mycatagory = useSelector((state) => state.catagory.allCatagories[catagoryId])
    const sessionUser = useSelector(state=> state.session.user)

    let seller;
    if(sessionUser){
        seller = sessionUser.username;
    }

    useEffect(()=> {
        dispatch(getAllCatagories())
    },[dispatch])


    const [catagory, setCatagory] = useState(mycatagory.catagory);
    const [img, setImg] = useState(mycatagory.img);
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

    const handleCancel =(e)=> {
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
        if (Object.keys(validationErrors).length > 0) return;
        setImageLoading(true);

        let updateCatagory = await dispatch(fetchUpdateCatagory(formData, catagoryId))
        if (updateCatagory) {
            setCatagory('');
            setImg(null);
            setImageLoading(false);
             history.push("/managecatagories");
        }
    }

    
    if (!sessionUser) return <Redirect to="/login" />;
    return (
        <div className="updateproduct-container">
            <div className="updateproduct-subcontainer">
            <div>
                <h2 className="updateproduct-h2">Edit Product</h2>
            </div>

            <form onSubmit={onSubmit}>
                <span><label htmlFor='name'>Name: </label></span><span className='error'> {hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input id='update-product-name' placeholder='Name of Product' type="text" value={catagory}
                    onChange={(e) => setCatagory(e.target.value)} />

             
                   
              

                <h3>Update cover photo</h3>

                <span><label htmlFor='img1'><img src={img} alt="" style={{width:'50px'}}></img></label></span><span className='error'> {hasSubmitted && validationErrors.img1 && `${validationErrors.img1}`}</span>
                <input id='img1' type="file" accept=".jpg, .jpeg, .png, .webp" 
                    onChange={(e) => setImg(e.target.files[0])} />
                <button
                    type="submit"
                    className="updateproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px", backgroundColor:"rgb(247 126 40)" }}>Update Product</button>
                <button
                   type="submit" onclick={handleCancel}
                    className="updateproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px", color:"white", backgroundColor:"black" }}>Cancel</button>    
                     {(imageLoading)&& <p>Loading...</p>}
            </form >
            </div>

        </div>
    )
}

export default UpdateCatagory;