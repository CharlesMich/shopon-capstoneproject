import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import '../products/products.css'
import { fetchAllReviews } from '../../store/review';
import './topratedproducts.css'



function TopRatedProducts(){
    const dispatch = useDispatch()
    const history = useHistory()
   

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product.allProducts))
    let reviews = useSelector((state)=> Object.values(state.review.reviews))
   
   
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    useEffect(()=> {
        dispatch(fetchAllReviews())
    }, [dispatch])

    // function to get avg reviews of a product
    function AvgRevByProduct(){
      let newArr = []
      allProducts.forEach(ele=> {

        let allRevOfProduct = reviews.filter(element => element.product_id === Number(ele.id))
        let revTotal = 0
        for(let i = 0; i < allRevOfProduct.length; i++){
            revTotal = revTotal + allRevOfProduct[i].rating
        }
        let prodRat = revTotal / allRevOfProduct.length;
        newArr.push({'product': ele.name, 'avgRating': prodRat})
       
        // prodObj[ele.name] = prodRat;
      })
      return newArr.filter(ele => typeof ele.avgRating === 'number').sort((a,b)=> b.avgRating - a.avgRating).slice(0,6)
      // return Object.entries(prodObj).sort((a,b) => b>a);
    }

    console.log(AvgRevByProduct())

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


    if(!allProducts) return null
    if(!reviews) return null
    if (!sessionUser) return <Redirect to="/login" />;

    return(
        <div className="product-container">
          <div className="product-sub-container">
                    <div style={{textAlign:"left"}}><h1 className="product-h1">Top Rated Products</h1></div>
                <div className='products-inner-container'>
                  <div className="productMap">{AvgRevByProduct().map(item => (
                    <div className="products-each-product">  
                     <div >{allProducts.map((ele)=> ele.name === item.product &&
                     
                     <Link to={`/products/productdetails/${ele.id}`} key={ele.id}> 
                              <div className="products-sub-name-new-1">Avg Rating: {item.avgRating}</div>
                     <div className="products-name">{ele.name}</div>
                              <div className="products-sub-name">{ele.product_shortdescription}</div>
                              {<img className="products-cat-img" src ={ele.img1} alt=""></img>}
                              <div className="products-sub-name">Price: {Number(ele.price).toFixed(2)}</div>
                              {/* <div className = "products-sub-name">{starAvgRating(Number(AvgRevByProduct(ele.id)))}</div> */}
                              </Link> 
                             
                             )}</div>
                             </div> 

                  ))}</div>
                   
                </div>
                </div>
         
        </div>

    )
       

}

export default TopRatedProducts