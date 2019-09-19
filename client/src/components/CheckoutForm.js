import React, { useState, Fragment } from "react";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import {
  CardNumberElement,
  CardCVCElement,
  CardExpiryElement,
  injectStripe
} from "react-stripe-elements";
import LoaderPayment from "./LoaderPayment";
import { makePayment } from "../actions/payments";

const CheckoutForm = props => {
  const {
    tourId,
    tourCode,
    title,
    price,
    startDate,
    endDate,
    paymentComplete
  } = props.tour;

  const [paymentPending, setPaymentPending] = useState(false);

  const togglePaymentPending = () => setPaymentPending(!paymentPending);

  const imageSrc = `/img/${tourCode}1.jpg`;

  document.body.style.overflow = "visible";

  const onSubmit = async e => {
    e.preventDefault();

    let { token } = await props.stripe.createToken({
      name: "Scottish Adventours"
    });

    const tourInfo = {
      tourId,
      title,
      price: price * 100,
      startDate,
      endDate,
      email: props.email
    };

    togglePaymentPending();
    props.makePayment(token.id, tourInfo, props.history);
  };

  return (
    <div className="u-container">
      <header className="u-center-text u-margin-bottom-sm">
        <h2 className="heading-secondary">Checkout</h2>
      </header>
      <div className="checkout">
        <div className="checkout__info u-margin-bottom-sm">
          <div className="checkout__info__image">
            <img src={imageSrc} alt="Tour" />
          </div>
          <div>
            <h3 className="checkout__info__text">Tour: {title}</h3>
            <p className="checkout__info__text">
              From: {moment(startDate).format("Do MMM YYYY")}
            </p>
            <p className="checkout__info__text">
              Until: {moment(endDate).format("Do MMM YYYY")}
            </p>
            <p className="checkout__info__text">Price: £{price}.00</p>
          </div>
        </div>
        <div className="checkout__info__confirmation u-center-text u-margin-bottom-sm">
          {paymentPending ? (
            <LoaderPayment msg={"Your payment is being processed..."}>
              {paymentComplete && togglePaymentPending()}
            </LoaderPayment>
          ) : (
            <Fragment>
              <p>Would you like to complete the purchase?</p>
              <p className="checkout__info__confirmation__testInfo">
                For testing, use card number:{" "}
              </p>
              <p className="checkout__info__confirmation__testInfo">
                4000 0082 6000 0000
              </p>
            </Fragment>
          )}
        </div>
        <div className="checkout__payment u-margin-bottom-md">
          <label>
            Card number
            <CardNumberElement id="cardNumber" />
          </label>
          <label>
            Expiration Date
            <CardExpiryElement id="expiryDate" />
          </label>
          <label>
            CVC
            <CardCVCElement id="CVC" />
          </label>
          <button id="CardButton" onClick={onSubmit}>
            Pay £{price}.00
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tour: state.tourData.selectedTour,
  paymentComplete: state.payment.paymentComplete,
  email: state.auth.user.email
});

export default connect(
  mapStateToProps,
  { makePayment }
)(injectStripe(withRouter(CheckoutForm)));
