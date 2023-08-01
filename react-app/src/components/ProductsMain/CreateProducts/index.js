import { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAddProduct} from '../../../store/product'
// import { addPics } from '../../store/SpotImagesReducer';
// import { createSpot } from '../../store/SpotsReducer';
import "./createproducts.css"

function CreateProduct() {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state=> state.session.user)
    let seller;
    if(sessionUser){
        seller = sessionUser.username;
    }

    const [name, setName] = useState('');
    const [product_shortdescription, setProduct_shortdescription] = useState('');
    const [product_longdescription, setProduct_longdescription] = useState('');
    const [price, setPrice] = useState('');
    const [catagory_id, setCatagory_id] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    const [img4, setImg4] = useState('');
    const [img5, setImg5] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [imageLoading, setImageLoading] = useState(false);



    useEffect(() => {
        const errors = {};
        if (name.length === 0) errors.name = 'Name is required';
        if (name.length > 100) errors.name = 'Name must be 100 characters or less';
        if (product_shortdescription.length === 0) errors.product_shortdescription = 'Short description is required';
        if (product_shortdescription.length > 500) errors.product_shortdescription = 'Short description must be 500 characters or less';
        if (product_longdescription.length === 0) errors.city = 'Long description is required';
        if (product_longdescription.length > 5000) errors.city = 'Long description must be 5000 characters or less';
        if (price.length === 0) errors.price = 'Price is required';
        if (isNaN(price) || price <= 0) errors.price = 'Price has be above 0 dollars';
        if (price.length > 6) errors.price = 'Price has be a numeric dollar amount with maximum 6 digits including decimals';
        if (catagory_id.length === 0) errors.catagory_id = 'Catagory is required';
        if (!img1) errors.img1 = 'Image 1 is required';
        if (!img2) errors.img2 = 'Image 2 is required';
        if (!img3) errors.img3 = 'Image 3 is required';
        if (!img4) errors.img4 = 'Image 4 is required';
        if (!img5) errors.img5 = 'Image 5 is required';
        setValidationErrors(errors);
    }, [name, product_shortdescription, product_longdescription, price, catagory_id, img1, img2, img3, img4, img5])

    const handleCancel =()=>{
        history.push('./manageproducts')
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("seller", seller);
        formData.append("product_shortdescription",  product_shortdescription);
        formData.append("product_longdescription", product_longdescription);
        formData.append("price", price);
        formData.append("catagory_id", catagory_id);
        formData.append("img1", img1);
        formData.append("img2", img2);
        formData.append("img3", img3);
        formData.append("img4", img4);
        formData.append("img5", img5);

        setHasSubmitted(true);
        if (Object.keys(validationErrors).length > 0) return;

        
        setImageLoading(true);
        let newProduct = await dispatch(fetchAddProduct(formData))
        if (newProduct) {
            setName('');
            setProduct_longdescription('');
            setProduct_shortdescription('');
            setPrice('');
            setCatagory_id('');
            setImg1(null);
            setImg2(null);
            setImg3(null);
            setImg4(null);
            setImg5(null);
            setImageLoading(false);
             history.push(`/products/productdetails/${newProduct.id}`);
                }

    }
    if (!sessionUser) return <Redirect to="/login" />;

    return (
        <div className="createproduct-container">
            <div className="createproduct-subcontainer">
            <div>
                <h2 className="createproduct-h2">Add a New Product</h2>
            </div>

            <form onSubmit={onSubmit}>
                <span><label htmlFor='create-product-name' className="createproduct-label">Name* </label></span><span className='error'> {hasSubmitted && validationErrors.name && `${validationErrors.name}`}</span>
                <input id='create-product-name' placeholder='Name of Product' type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />

                <span><label htmlFor='product_shortdescription' className="createproduct-label">Short Decription* </label></span><span className='error'> {hasSubmitted && validationErrors.product_shortdescription && `${validationErrors.product_shortdescription}`}</span>
                <input id='product_shortdescription' placeholder='A short description of your product' type="text" value={product_shortdescription}
                    onChange={(e) => setProduct_shortdescription(e.target.value)} />

                <span className="cityState">
                    <span><label htmlFor='product_longdescription' className="createproduct-label">Long Description* </label></span><span className='error'> {hasSubmitted && validationErrors.product_longdescription && `${validationErrors.product_longdescription}`}</span>
                    <textarea id='product_longdescription' placeholder='A detailed description of your product' type="text" value={product_longdescription}
                        onChange={(e) => setProduct_longdescription(e.target.value)} />
                </span>
                     {/* <h3>Pick a property type for your spot</h3> */}
                {/* <p>Help people find what they are looking for.</p>      */}
                    <div> <div><label htmlFor='catagory_id' className="createproduct-label">Catagory* </label></div>
                <span><select className="createproduct-select" defaultValue={null} value={catagory_id} onChange={(e) => setCatagory_id(e.target.value)} >
                        {/* <option value = ""></option> */}
                        <option value={"Choose one"}></option>
                        <option value={1}>Electronics</option>
                        <option value={2}>Clothes</option>
                        <option value={3}>Books</option>
                        <option value={4}>Sports and Fitness</option>
                        <option value={5}>Cologne</option>
                        <option value={6}>Shoes</option>
                        <option value={7}>Other</option>
          </select></span></div>
                <span><label htmlFor='price' className="createproduct-label">Price* </label></span><span className='error'> {hasSubmitted && validationErrors.price && `${validationErrors.price}`}</span>
                <input id='price' placeholder='Price (USD)' type="text" value={price}
                    onChange={(e) => setPrice(e.target.value)} />

                <h3 className="createproduct-h3">Add photos of your products</h3>

                <span><label htmlFor='img1' className="createproduct-label">Image 1*</label></span><span className='error'> {hasSubmitted && validationErrors.img1 && `${validationErrors.img1}`}</span>
                <input id='img1' type="file" 
                    onChange={(e) => setImg2(e.target.files[0])} />

                <span><label htmlFor='img2' className="createproduct-label">Image 2*</label></span><span className='error'> {hasSubmitted && validationErrors.img2 && `${validationErrors.img2}`}</span>
                <input id='img2' type="file" 
                    onChange={(e) => setImg3(e.target.files[0])} />

                <span><label htmlFor='img3' className="createproduct-label">Image 3*</label></span><span className='error'> {hasSubmitted && validationErrors.img3 && `${validationErrors.img3}`}</span>
                <input id='img3' type="file" 
                    onChange={(e) => setImg4(e.target.files[0])} />

                <span><label htmlFor='img4' className="createproduct-label">Image 4*</label></span><span className='error'> {hasSubmitted && validationErrors.img4 && `${validationErrors.img4}`}</span>
                <input id='img4' type="file" 
                    onChange={(e) => setImg5(e.target.files[0])} />

                <span><label htmlFor='img5' className="createproduct-label">Image 5*</label></span><span className='error'> {hasSubmitted && validationErrors.img5 && `${validationErrors.img5}`}</span>
                <input id='img5' type="file"  accept=".jpg, .jpeg, .png, .webp" required
                    onChange={(e) => setImg1(e.target.files[0])} />

                <button
                    type="submit"
                    className="createproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px" }}>Create Product</button>
                <button
                    onClick={handleCancel}
                    className="createproduct-button" style={{ fontSize: "10px", padding: "10px", marginTop: "10px", backgroundColor:"black", }}>Cancel</button>    
                     {(imageLoading)&& <p>Loading...</p>}
            </form >
            </div>

        </div>
    )
}

export default CreateProduct