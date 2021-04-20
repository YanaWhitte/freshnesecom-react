import { Link } from "react-router-dom";

const SmallProductCard = ({ title, description, price, oldPrice, discount }) => {
  return <div className="column product-card product-card-2">
    <div className="img-sub">
      <p className="discount">{discount}</p>
    </div>
    <p className="product-title">{title}</p>
    <p className="description">{description}</p>
    <div className="price-row row">
      <div className="column">
        <p className="price">{price}</p>
        <p className="old-price">{oldPrice}</p>
      </div>
      <div><Link to="/checkout" data-id={2} className="buy-now-btn green-btn">Buy now</Link></div>
    </div>
  </div>
}

export default SmallProductCard;