import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getSingleProduct } from "../../store/product";
import { fetchAddCartItem } from "../../store/cartproduct"
import './allproducts.css'


function ProductDetails() {
  const dispatch = useDispatch()
  const history = useHistory()


  const { productId } = useParams()
  
 
  const cart_id = 1

  let sessionUser = useSelector((state) => state.session.user);

  let product = useSelector((state) => (state.product.singleProduct))


  const [quantity, setQuantity] = useState(1)
  const [hasSubmitted, setHasSubmitted] = useState(false);


  useEffect(() => {
    dispatch(getSingleProduct(productId))
  }, [dispatch, productId]);

  const user_id = sessionUser.id

console.log(product.img1)
  const onSubmit = async (e) => {
    e.preventDefault();

    const createCartForm = {
      cart_id,
      productId,
      user_id,
      quantity
    }
    setHasSubmitted(true);

    let newCartItem = await dispatch(fetchAddCartItem(createCartForm))

    if (newCartItem) {
      history.push(`/`);
    }

  }

  if (!product) return null
  if (!sessionUser) return null
  return (
    <div className="productdetails-container">
            <div className="productdetails-subcontainer">
             <div className="product-galary-image-galary">
              <div className="product-detail-thumbnail">
            <img className = "product-detail-thumbnail-img" src={product.img1}></img>
            <img className = "product-detail-thumbnail-img" src={product.img2}></img>
            <img className = "product-detail-thumbnail-img" src={product.img3}></img>
            <img className = "product-detail-thumbnail-img" src={product.img4}></img>
            <img className = "product-detail-thumbnail-img" src={product.img5}></img>
            </div>
            <div className = "produt-detail-main-image">
            <img className = "product-detail-img" src={product.img1}></img>
            </div>
            </div> 
                    <form onSubmit={onSubmit}>
                                <div><label htmlFor='quantity'>Quantity</label></div>
                                <div><select id="quantity" className="product-unit-select" value={quantity}
                                  onChange={(e) => setQuantity(e.target.value)}>
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                </select></div>

                                <button type="sumbit" className="product-details-shoppingcart" >Add to Cart</button>
                    </form>
            </div>
    </div>

  )


}

export default ProductDetails