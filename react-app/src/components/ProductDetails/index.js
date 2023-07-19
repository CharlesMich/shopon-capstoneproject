import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link, Redirect} from 'react-router-dom'
import { getSingleProduct } from "../../store/product";
import { fetchAddCartItem } from "../../store/cartproduct"
import { getSingleReview } from "../../store/review"
import { fetchLoadCartItem } from '../../store/cartproduct';
import CreateReviewModal from '../AddReview';
import OpenModalButton from '../OpenModalButton';
import './allproducts.css'


function ProductDetails() {
  const dispatch = useDispatch()
  const history = useHistory()

  let { productId } = useParams()

  productId = Number(productId)
  const cart_id = 1

  let sessionUser = useSelector((state) => state.session.user);
  let product = useSelector((state) => (state.product.singleProduct))
  let reviews = useSelector((state) => Object.values((state.review.singleReview)))
  let cartItems = useSelector(state => Object.values(state.cartProducts))

  const user_id = sessionUser.id
  
  const [previmg, setPrevimg] = useState(product.img1)
  const [quantity, setQuantity] = useState(1)
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    dispatch(fetchLoadCartItem(user_id))
  }, [dispatch, user_id]);

  useEffect(() => {
    dispatch(getSingleProduct(productId))
  }, [dispatch, productId]);

  useEffect(() => {
    dispatch(getSingleReview(productId))
  }, [dispatch, productId]);


  const count = cartItems.length

  // check if user has no reviews
  let userNoReview = true;
  if (reviews.length > 0) {
    reviews.forEach(review => {
      if (user_id && Number(review.user_id) === Number(user_id)) userNoReview = false;
    });
  }

  function avgRating(reviews) {
    let sum = 0
    for (let i = 0; i < reviews.length; i++) {
      sum = sum + reviews[i].rating
    }
    return sum / reviews.length
  }

  function starAvgRating(avgRating) {
    if (avgRating === 1) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (1 < avgRating && avgRating < 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (2 < avgRating && avgRating < 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (3 < avgRating && avgRating < 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i><i class="fa-regular fa-star"></i></div>)
    } else if (avgRating === 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (4 < avgRating && avgRating < 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star-half-stroke"></i></div>)
    } else if (avgRating === 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>)
    }
  }

  function starRating(star) {
    if (star === 1) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 2) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 3) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 4) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>)
    } else if (star === 5) {
      return (<div><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>)
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await dispatch(fetchLoadCartItem(user_id))

    const countCart = ()=>{
      let count = 0                       
      for (let item of cartItems){
          count = count + item.quantity
      }
      return count;
     }
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
  useEffect(() => {
    dispatch(fetchLoadCartItem())
  }, [dispatch], onSubmit);

  if (!product) return null
  if (!sessionUser) return null
  if (!reviews) return null
  if (!sessionUser) return <Redirect to="/login" />;
  return (
    <div className="productdetails-container" >
      <div className="productdetails-subcontainer">
        <div className="product-galary-image-galary">
          <div className="product-detail-thumbnail">
            <img className="product-detail-thumbnail-img" src={product.img1}></img>
            <img className="product-detail-thumbnail-img" src={product.img2}></img>
            <img className="product-detail-thumbnail-img" src={product.img3}></img>
            <img className="product-detail-thumbnail-img" src={product.img4}></img>
            <img className="product-detail-thumbnail-img" src={product.img5}></img>
          </div>
          <div className="produt-detail-main-image">
            <img className="product-detail-img" src={product.img1}></img>
          </div>
          <div className="product-detail-text">
            <h2 className="productdetails-h2">{product.name}</h2>
            <h3 className="productdetails-h3">{product.product_shortdescription}</h3>
            <div>
              {/* <span>Seller</span> */}
              <span>Avg Rating: {starAvgRating(Number(avgRating(reviews)))}</span>
              <span>{reviews.length}</span><span>{reviews.length === 1 ? <span>Review</span> : <span> Reviews</span>}</span>
            </div>
            <p className="productdetails-review-text">{product.product_longdescription}</p>
            <div>{count}</div>
            <div>Price: {Number(product.price).toFixed(2)}</div>
            <div className="productdetails-cart-form">
              <form onSubmit={onSubmit}>
                <div className="productdetails-cart-form-elements">
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
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select></div>

                  <button type="sumbit" className="product-details-shoppingcart-button" >Add to Cart</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <h2 className="productdetails-h2">Reviews</h2>
        {/* <div>< OpenModalButton buttonText="Post your Review" className="postReview" modalComponent={<CreateReviewModal id={product.id} />} /></div> */}
        <span>{userNoReview ? <div  ><OpenModalButton buttonText="Post your Review" className="postReview" modalComponent={<CreateReviewModal id={product.id} />} /></div> : null}</span>
        <div>{reviews.map((ele) =>
          <div className="productdetails-review">
            <div className="productdetails-review-name-rating"><span style={{ paddingRight: '10px' }}>{ele.first_name} {ele.last_name}</span><span style={{ paddingRight: '10px' }}> • </span><span>{starRating(ele.rating)}</span></div>
            <p className="productdetails-review-text">{ele.review}</p>
          </div>
        )}</div>
      </div>
    </div>
  )
}

export default ProductDetails