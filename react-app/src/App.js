import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import AllProducts from "./components/products";
import ProductDetails from "./components/ProductDetails";
import AllReviews from "./components/Reviews";
import Cart from "./components/Cart";
import Catagories from "./components/Catagories";
import LandingPage from "./components/LandingPage";
import Order from "./components/order";
import TopRatedProducts from "./components/TopRatedProducts";
import NewArrivals from "./components/NewArrivals";
import SearchByProduct from "./components/SearchByProduct";
import ManageProducts from "./components/ProductsMain/ManageProducts";
import CreateProduct from "./components/ProductsMain/CreateProducts";
import Footer from "./components/footer";
import UpdateProductModal from "./components/ProductsMain/UpdateProductModal";
import ManageCatagory from "./components/CatagoriesMain/ManageCatagories";
import CreateCatagory from "./components/CatagoriesMain/CreateCatagory";
import UpdateCatagory from "./components/CatagoriesMain/UpdateCatagory"
// import ManageOrder from "./components/ManageOrders";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
         <div className="main">
        <Switch>
          <Route path="/login" ><LandingPage /></Route>
          <Route path="/signup"><SignupFormPage /></Route>
          <Route path="/cart"><Cart/></Route>
          <Route path="/reviews"><AllReviews/></Route>
          <Route path ="/manageproducts/createproduct"><CreateProduct/></Route>
          <Route exact path ="/managecatagories/createcatagory/"><CreateCatagory/></Route>
          <Route path ="/managecatagories/updatecatagory/:catagoryId"><UpdateCatagory/></Route>
          <Route path="/manageproducts/updateproduct/:productId"><UpdateProductModal/></Route>
          <Route path ="/managecatagories"><ManageCatagory/></Route>
          <Route path ="/products/top-rated-products"><TopRatedProducts/></Route>
          <Route path="/products/new-arrivals"><NewArrivals/></Route>
          <Route path = "/order/:orderId"><Order/></Route>
          <Route exact path="/products/all/:catagoryId"><AllProducts/></Route>
          <Route path="/products/productdetails/:productId"><ProductDetails/></Route>
          <Route path ="/manageproducts"><ManageProducts/></Route>
          <Route path ="/products/search-by-product"><SearchByProduct/></Route>
          {/* <Route path="/manageorders"><ManageOrder/></Route> */}
          <Route path ="/"><Catagories/></Route>
        </Switch>
        {/* <Footer></Footer> */}
         </div>
      )}
    </>
  );
}

export default App;
