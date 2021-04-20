import Header from "../components/Header/Header";
import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="path-section container row">
                    <Link to="/home" className="home">Homepage</Link>
                    <p className="slash">/</p>
                    <p className="sel-cat">Checkout page</p>
                </section>
                <section className="billing-order row">
                    <section className="billing-form column">
                        <div className="billing-info step-form">
                            <h2 className="title">Billing info</h2>
                            <div className="caption-row row">
                                <p className="caption">Please enter your billing info</p>
                                <p>Step 1 of 5</p>
                            </div>
                            <form className="order-form" action="#" method="post">
                                <div className="row">
                                    <label>
                                        <p className="label">First name</p>
                                        <input type="text" name="first-name" id="first-name" placeholder="First name" />
                                    </label>
                                    <label>
                                        <p className="label">Last name</p>
                                        <input type="text" name="last-name" id="last-name" placeholder="Last name" />
                                    </label>
                                </div>
                                <div className="row">
                                    <label>
                                        <p className="label">Email address</p>
                                        <input type="text" name="email" id="email" placeholder="Email address" />
                                    </label>
                                    <label>
                                        <p className="label">Phone number</p>
                                        <input type="text" name="phone" id="phone" placeholder="Phone number" />
                                    </label>
                                </div>
                                <div className="row">
                                    <label>
                                        <p className="label">Address</p>
                                        <input type="text" name="address" id="address" placeholder="Address" />
                                    </label>
                                    <label>
                                        <p className="label">Town / City</p>
                                        <input type="text" name="city" id="city" placeholder="Town or City" />
                                    </label>
                                </div>
                                <div className="row">
                                    <div className="select">
                                        <label htmlFor="country" className="select">
                                            <p className="label">State / Country</p>
                                        </label>
                                        <div className="input-div row">
                                            <p className="placeholder">Choose a state or Country</p>
                                            <input type="checkbox" name="country" id="country" />
                                            <div className="check-icon" />
                                        </div>
                                    </div>
                                    <label>
                                        <p className="label">ZIP/Postal code</p>
                                        <input type="text" name="postal-code" id="postal-code" placeholder="Postal code or ZIP" />
                                    </label>
                                </div>
                                <div className="check-ship row">
                                    <label className="ship-label row">
                                        <input type="checkbox" name="check-ship" />
                                        <div className="check-icon" />
                                        <p className="label">Ship to a different address?</p>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="billing-method step-form">
                            <h2 className="title">Billing method</h2>
                            <div className="caption-row row">
                                <p className="caption">Please enter your payment method</p>
                                <p>Step 2 of 5</p>
                            </div>
                            <div className="radio-pay">
                                <div className="select-method row">
                                    <label className="label-radio row">
                                        <input type="radio" name="select-method" />
                                        <div className="radio-icon" />
                                        <p className="radio-name">FedEx</p>
                                        <p className="plus-price">+32 USD</p>
                                        <p className="additional">Additional price</p>
                                        <img src="icons/fedex-icon.svg" alt="FedEx" />
                                    </label>
                                </div>
                                <div className="select-method row">
                                    <label className="label-radio row">
                                        <input type="radio" name="select-method" />
                                        <div className="radio-icon" />
                                        <p className="radio-name">DHL</p>
                                        <p className="plus-price">+15 USD</p>
                                        <p className="additional">Additional price</p>
                                        <img src="icons/dhl-icon.svg" alt="FedEx" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="payment-info step-form">
                            <h2 className="title">Payment method</h2>
                            <div className="caption-row row">
                                <p className="caption">Please enter your payment method</p>
                                <p>Step 3 of 5</p>
                            </div>
                            <div className="card-info pay-method">
                                <label className="label-radio row">
                                    <input type="radio" name="select-payment" defaultChecked />
                                    <div className="radio-icon" />
                                    <p className="label">Credit card</p>
                                    <img src="icons/visa-icon.svg" alt="visa" className="pay-icon" />
                                </label>
                                <form className="payment card-form" action="#" method="get">
                                    <div className="row-1 row">
                                        <label>
                                            <p className="label">Card number</p>
                                            <input type="text" name="card-number" placeholder="Card number" />
                                        </label>
                                    </div>
                                    <div className="bottom-row row">
                                        <label className="holder">
                                            <p className="label">Card holder</p>
                                            <input type="text" name="card-holder" placeholder="Card holder" />
                                        </label>
                                        <label className="date">
                                            <p className="label">Expiration date</p>
                                            <input type="text" name="expiration-date" placeholder="DD/MM/YY" />
                                        </label>
                                        <label className="cvc">
                                            <p className="label">CVC</p>
                                            <input type="text" name="cvc" placeholder="CVC" />
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="select-method pay-method">
                                <label className="label-radio row">
                                    <input type="radio" name="select-payment" />
                                    <div className="radio-icon" />
                                    <p className="label">PayPal</p>
                                    <img src="icons/paypal-icon.svg" alt="paypal" className="pay-icon" />
                                </label>
                            </div>
                            <div className="select-method pay-method">
                                <label className="label-radio row">
                                    <input type="radio" name="select-payment" />
                                    <div className="radio-icon" />
                                    <p className="label">Bitcoin</p>
                                    <img src="icons/bitcoin-icon.svg" alt="bitcoin" className="pay-icon" />
                                </label>
                            </div>
                        </div>
                        <div className="add-info step-form">
                            <h2 className="title">Additional informations</h2>
                            <div className="caption-row row">
                                <p className="caption">Need something else? We will make it for you!</p>
                                <p>Step 4 of 5</p>
                            </div>
                            <label className="text-label">
                                <p className="label">Order notes</p>
                                <textarea name="order-notes" placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..." defaultValue={""} />
                            </label>
                        </div>
                        <div className="confirmation">
                            <h2 className="title">Confirmation</h2>
                            <div className="caption-row row">
                                <p className="caption">We are getting to the end. Just few clicks and your order is ready!</p>
                                <p>Step 5 of 5</p>
                            </div>
                            <div className="check-ship row">
                                <label className="ship-label row">
                                    <input type="checkbox" name="check-agree" />
                                    <div className="check-icon" />
                                    <p className="agree">I agree with sending an Marketing and newsletter emails. No spam,
                                        promissed!</p>
                                </label>
                            </div>
                            <div className="check-ship row">
                                <label className="ship-label row">
                                    <input type="checkbox" name="check-agree" />
                                    <div className="check-icon" />
                                    <p className="agree">I agree with our <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>.</p>
                                </label>
                            </div>
                            <div><a href="#" className="green-btn">Complete order</a></div>
                        </div>
                        <div className="safe">
                            <img src="icons/safe-icon.svg" alt="" />
                            <p className="bold">All your data are safe</p>
                            <p>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </section>
                    <div className="flex1">
                        <section className="order-sum column">
                            <h2 className="title">Order Summary</h2>
                            <p className="caption">Price can change depending on shipping method and taxes of your state.</p>
                            <div className="order-product-card row">
                                <div className="column-1 column">
                                    <div className="img-sub" />
                                    <div className="speed-btn wish-btn row">
                                        <label className="check-wish row">
                                            <input type="checkbox" name="check-wish" />
                                            <div className="check-icon" />
                                            <p className="check-name">Wishlist</p>
                                        </label>
                                    </div>
                                    <div className="speed-btn compare-row row">
                                        <img src="icons/compare-small.svg" alt="" />
                                        <p>Compare</p>
                                    </div>
                                    <div className="speed-btn remove-row row">
                                        <img src="icons/remove-icon.svg" alt="" />
                                        <p>Remove</p>
                                    </div>
                                </div>
                                <div className="column-2 column">
                                    <p className="product-title">Product title</p>
                                    <div className="detail-row row">
                                        <p className="name">Farm:</p>
                                        <p className="value">Tharamis Farm</p>
                                    </div>
                                    <div className="detail-row row">
                                        <p className="name">Freshness:</p>
                                        <p className="value">1 day old</p>
                                    </div>
                                    <div className="stars row">
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-transparent.svg" alt="" />
                                    </div>
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56 USD</p>
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="count-block row">
                                        <input type="text" name="value" placeholder="1pcs" />
                                        <label className="check-count row">
                                            <input type="checkbox" name="check-count" />
                                            <p className="check-name">Pcs</p>
                                            <div className="check-icon" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="order-product-card row">
                                <div className="column-1 column">
                                    <div className="img-sub" />
                                    <div className="speed-btn wish-btn row">
                                        <label className="check-wish row">
                                            <input type="checkbox" name="check-wish" />
                                            <div className="check-icon" />
                                            <p className="check-name">Wishlist</p>
                                        </label>
                                    </div>
                                    <div className="speed-btn compare-row row">
                                        <img src="icons/compare-small.svg" alt="" />
                                        <p>Compare</p>
                                    </div>
                                    <div className="speed-btn remove-row row">
                                        <img src="icons/remove-icon.svg" alt="" />
                                        <p>Remove</p>
                                    </div>
                                </div>
                                <div className="column-2 column">
                                    <p className="product-title">Product title</p>
                                    <div className="detail-row row">
                                        <p className="name">Farm:</p>
                                        <p className="value">Tharamis Farm</p>
                                    </div>
                                    <div className="detail-row row">
                                        <p className="name">Freshness:</p>
                                        <p className="value">1 day old</p>
                                    </div>
                                    <div className="stars row">
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-yellow.svg" alt="" />
                                        <img src="icons/star-transparent.svg" alt="" />
                                    </div>
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56 USD</p>
                                    </div>
                                </div>
                                <div className="column-3">
                                    <div className="count-block row">
                                        <input type="text" name="value" placeholder="1pcs" />
                                        <label className="check-count row">
                                            <input type="checkbox" name="check-count" />
                                            <p className="check-name">Pcs</p>
                                            <div className="check-icon" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <div className="row">
                                    <p>Subtotal</p>
                                    <p>73.98 USD</p>
                                </div>
                                <div className="row">
                                    <p>Tax</p>
                                    <p>17% 16.53 USD</p>
                                </div>
                                <div className="row">
                                    <p>Shipping</p>
                                    <p>0 USD</p>
                                </div>
                            </div>
                            <div className="promo-input row">
                                <input type="text" name="value" placeholder="Apply promo code" />
                                <label className="check-count row">
                                    <input type="checkbox" name="check-count" />
                                    <p className="check-name">Apply now</p>
                                </label>
                            </div>
                            <div className="total-order row">
                                <div className="column">
                                    <p className="total-caption">Total Order</p>
                                    <p className="delivery-data">Guaranteed delivery day: June 12, 2020</p>
                                </div>
                                <p className="total-price">89.84 USD</p>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
            <footer className="footer-checkout">
                <div className="copyright">
                    <p>Copyright © 2020 petrbilek.com</p>
                </div>
            </footer>
        </div>
    );
}

export default Checkout;