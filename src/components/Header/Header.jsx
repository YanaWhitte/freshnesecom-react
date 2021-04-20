import { Link } from "react-router-dom";

const Header = () => {
  return <div>
    <header className="small-header container row">
      <div className="left row">
        <a href="#" className="chat">Chat with us</a>
        <p className="info">+420 336 775 664</p>
        <p className="info">info@freshnesecom.com</p>
      </div>
      <div className="right">
        <Link to="/blog" className="menu-item">Blog</Link>
        <a href="#" className="menu-item">About Us</a>
        <a href="#" className="menu-item">Careers</a>
      </div>
    </header>
    <header className="big-header container row">
      <div className="logo-container">
        <Link to="/home"><img src="img/logo.svg" alt="logo" /></Link>
      </div>
      <div className="search row">
        <div className="select row">
          <p className="select-category">All categories</p>
          <img src="icons/arrow-down-more.svg" alt="select" />
        </div>
        <input type="text" className="search-input" placeholder="Search Products, categories ..." />
        <img src="icons/search-icon.svg" alt="search icon" className="search-icon" draggable="false" />
      </div>
      <div className="user-panel row">
        <div className="user-icon">
          <img src="icons/user-icon.svg" alt="user icon" />
        </div>
        <div className="cart">
          <div className="cart-value">4</div>
          <img src="icons/cart-icon.svg" alt="cart" />
        </div>
      </div>
    </header>
    <nav className="main-nav container row">
      <div className="menu-item row">
        <Link to="/bakery">Bakery</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" />
      </div>
      <div className="menu-item row">
        <Link to="/fruit-and-vegetables">Fruit and vegetables</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/meat-and-fish">Meat and fish</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/drinks">Drinks</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/kitchen">Kitchen</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/special-nutrition">Special nutrition</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/baby">Baby</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
      <div className="menu-item row">
        <Link to="/pharmacy">Pharmacy</Link>
        <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
      </div>
    </nav>
  </div>
}

export default Header;