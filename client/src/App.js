import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import TourList from "./components/TourList";
import TourDetails from "./components/TourDetails";
import Events from "./components/Events";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import WrappedCheckout from "./components/WrappedCheckout";
import Thankyou from "./components/Thankyou";
import AddReview from "./components/AddReview";
import ReviewList from "./components/ReviewList";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tours" component={TourList} />
          <Route exact path="/tourDetails/:id" component={TourDetails} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/checkout" component={WrappedCheckout} />
          <Route exact path="/thankyou" component={Thankyou} />
          <Route exact path="/reviews" component={ReviewList} />
          <Route exact path="/addReview" component={AddReview} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
