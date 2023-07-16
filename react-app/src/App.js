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
        <Switch>
          <Route path="/login" >
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/reviews">
            <AllReviews/>
          </Route>
          <Route exact path="/products">
            <AllProducts/>
          </Route>
          <Route path="/products/:productId">
          <ProductDetails/>
          </Route>
          <Route path ="/"><Catagories/></Route>

        </Switch>
      )}
    </>
  );
}

export default App;
