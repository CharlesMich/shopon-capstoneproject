import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { Link, Redirect } from 'react-router-dom'
import { getAllProducts } from "../../store/product";
import '../products/products.css'
import { getAllReviews } from '../../store/review';



function TopRatedProducts(){
    const dispatch = useDispatch()
    const history = useHistory()
   

    let sessionUser = useSelector((state)=> state.session.user);
    if(!sessionUser) history.push('/')

    let allProducts = useSelector((state)=> Object.values(state.product.allProducts))
    let reviews = useSelector((state)=> Object.values(state.review.allReviews))
    // let newArr= allProducts.filter(ele => ele.catagory_id===Number(catagoryId))
   
    useEffect(() => {
        dispatch(getAllProducts())
    },[dispatch]);

    useEffect(()=> {
        dispatch(getAllReviews())
    }, [dispatch])

    // function to get avg reviews of a product
    function AvgRevByProduct(prodId){
        let allRevOfProduct = reviews.filter(ele => ele.product_id === Number(prodId))
        let revTotal = 0
        for(let i = 0; i < allRevOfProduct.length; i++){
            revTotal = revTotal + allRevOfProduct[i].rating
        }

        return revTotal / allRevOfProduct.length;
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

      function numOfReviews(prodId){
        
      }

    if(!allProducts) return null
    if(!reviews) return null
    if (!sessionUser) return <Redirect to="/login" />;

    return(
        <div className="product-container">
           
                <div className='products-inner-container'>
                    <div className="productMap">{allProducts.map((ele)=> 
                                        <div className="products-each-product">  
                                       
                                       <Link to={`/products/productdetails/${ele.id}`} key={ele.id}> <div className="products-name">{ele.name}</div>
                                                <div className="products-sub-name">{ele.product_shortdescription}</div>
                                                {<img className="products-cat-img" src ={ele.img1} alt=""></img>}
                                                <div className="products-sub-name">Price: {Number(ele.price).toFixed(2)}</div>
                                                <div className = "products-sub-name">{starAvgRating(Number(AvgRevByProduct(ele.id)))}</div>
                                                </Link> 
                                               
                                        </div> 
                    )}</div>
                </div>
         
        </div>

    )
       

}

export default TopRatedProducts