import { Link } from "react-router-dom";

const Footer = () => {
  return <footer>
    <section className="links-section row">
      <div className="column">
        <p className="title">Get in touch</p>
        <ul>
          <li><a href="#" className="link">About Us</a></li>
          <li><a href="#" className="link">Careers</a></li>
          <li><a href="#" className="link">Press Releases</a></li>
          <li><Link to="/blog" className="link">Blog</Link></li>
        </ul>
      </div>
      <div className="column">
        <p className="title">Connections</p>
        <ul>
          <li><a href="#" className="link">Facebook</a></li>
          <li><a href="#" className="link">Twitter</a></li>
          <li><a href="#" className="link">Instagram</a></li>
          <li><a href="#" className="link">Youtube</a></li>
          <li><a href="#" className="link">LinkedIn</a></li>
        </ul>
      </div>
      <div className="column">
        <p className="title">Earnings</p>
        <ul>
          <li><a href="#" className="link">Become an Affiliate</a></li>
          <li><a href="#" className="link">Advertise your product</a></li>
          <li><a href="#" className="link">Sell on Market</a></li>
        </ul>
      </div>
      <div className="column">
        <p className="title">Account</p>
        <ul>
          <li><a href="#" className="link">Your account</a></li>
          <li><a href="#" className="link">Returns Centre</a></li>
          <li><a href="#" className="link">100 % purchase protection</a></li>
          <li><a href="#" className="link">Chat with us</a></li>
          <li><a href="#" className="link">Help</a></li>
        </ul>
      </div>
    </section>
    <section className="tags-section">
      <p className="tags-title">Product tags</p>
      <div className="tags-list row">
        <p className="tag">Beans</p>
        <p className="tag">Carrots</p>
        <p className="tag">Apples</p>
        <p className="tag">Garlic</p>
        <p className="tag">Mushrooms</p>
        <p className="tag">Tomatoes</p>
        <p className="tag">Chilli peppers</p>
        <p className="tag">Broccoli</p>
        <p className="tag">Watermelons</p>
        <p className="tag">Oranges</p>
        <p className="tag">Bananas</p>
        <p className="tag">Grapes</p>
        <p className="tag">Cherries</p>
        <p className="tag">Meat</p>
        <p className="tag">Seo tag</p>
        <p className="tag">Fish</p>
        <p className="tag">Seo tag</p>
        <p className="tag">Fresh food</p>
        <p className="tag">Lemons</p>
      </div>
    </section>
    <div className="copyright">
      <p>Copyright © 2020 petrbilek.com</p>
    </div>
  </footer>
}

export default Footer;