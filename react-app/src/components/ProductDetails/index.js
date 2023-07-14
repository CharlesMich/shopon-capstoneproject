import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import { getSingleProduct } from "../../store/product";
import { fetchAddCartItem } from "../../store/cartproduct"


function ProductDetails() {
  const dispatch = useDispatch()
  const history = useHistory()


  // const { productId } = useParams()
  // console.log(productId)
  // let productId = useParams()
  // console.log(productId)

  const product_id = 3
  const cart_id = 1

  let sessionUser = useSelector((state) => state.session.user);

  let product = useSelector((state) => state.product)


  const [quantity, setQuantity] = useState(1)
  const [hasSubmitted, setHasSubmitted] = useState(false);


  useEffect(() => {
    dispatch(getSingleProduct(product_id))
  }, [dispatch, product_id]);

  const user_id = sessionUser.id

  let productArr = Object.values(product)


  const onSubmit = async (e) => {
    e.preventDefault();

    const createCartForm = {
      cart_id,
      product_id,
      user_id,
      quantity
    }
    setHasSubmitted(true);

    let newCartItem = await dispatch(fetchAddCartItem(createCartForm))

    if (newCartItem) {
      history.push(`/`);
    }

  }

  if (!product || !productArr) return null
  if (!sessionUser) return null
  return (
    <div className="product-container">
      <div>Hello from single product</div>
      <div className="productMap">{productArr.map((ele) =>
        <div>
          <div>{ele.name}</div>
          <div>{ele.product_shortdescription}</div>
          <div>{ele.price}</div>
          <div>{ele.product_longdescription}</div>
        </div>
      )}</div>

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
        <Link to="/cart">Go to Cart</Link>

    </div>

  )


}

export default ProductDetails