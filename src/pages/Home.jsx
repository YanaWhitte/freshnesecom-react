function Home() {
  return (
    <div>
      <header className="small-header container row">
        <div className="left row">
          <a href="#" className="chat">Chat with us</a>
          <p className="info">+420 336 775 664</p>
          <p className="info">info@freshnesecom.com</p>
        </div>
        <div className="right">
          <a href="blog.html" className="menu-item">Blog</a>
          <a href="#" className="menu-item">About Us</a>
          <a href="#" className="menu-item">Careers</a>
        </div>
      </header>
      <header className="big-header container row">
        <div className="logo-container">
          <img src="img/logo.svg" alt="logo" />
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
          <a href="bakery.html">Bakery</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="fruit-and-vegetables.html">Fruit and vegetables</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="meat-and-fish.html">Meat and fish</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="drinks.html">Drinks</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="kitchen.html">Kitchen</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="special-nutrition.html">Special nutrition</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="baby.html">Baby</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
        <div className="menu-item row">
          <a href="pharmacy.html">Pharmacy</a>
          <img src="icons/arrow-small-down.svg" alt="arrow" width={12} height={12} />
        </div>
      </nav>
      <main>
        <section className="category-menu container row">
          <div className="column menu">
            <p className="title">Category menu</p>
            <ul>
              <li><a href="#" className="category-item">Bakery</a></li>
              <li><a href="#" className="category-item">Fruit and vegetables</a></li>
              <li><a href="#" className="category-item">Meat and fish</a></li>
              <li><a href="#" className="category-item">Drinks</a></li>
              <li><a href="#" className="category-item">Kitchen</a></li>
              <div className="more-btn row">
                <a href="#">More categories</a>
                <img src="icons/arrow-black-right.svg" alt="arrow icon" />
              </div>
            </ul>
          </div>
          <div className="green-card-row row">
            <div className="column card card-1">
              <div className="card-content">
                <p className="subfocus">Banner subfocus</p>
                <h2 className="card-title">Space for heading</h2>
                <div className="recepies-btn bottom row">
                  <a href="#">Read recepies</a>
                  <img src="icons/arrow-green-right.svg" alt="arrow icon" />
                </div>
              </div>
            </div>
            <div className="column card card-2">
              <div className="card-content">
                <p className="subfocus">Banner subfocus</p>
                <h2 className="card-title">Space for heading</h2>
                <div className="recepies-btn bottom row">
                  <a href="#">Read recepies</a>
                  <img src="icons/arrow-green-right.svg" alt="arrow icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="category-menu container row">
          <div className="column menu">
            <p className="title">Best selling products</p>
            <ul>
              <li><a href="#" className="category-item">Kitchen</a></li>
              <li><a href="#" className="category-item">Meat and fish</a></li>
              <li><a href="#" className="category-item">Special nutrition</a></li>
              <li><a href="#" className="category-item">Pharmacy</a></li>
              <li><a href="#" className="category-item">Baby</a></li>
              <div className="more-btn products-btn row">
                <a href="#">More products</a>
                <img src="icons/arrow-black-right.svg" alt="arrow icon" />
              </div>
            </ul>
          </div>
          <div className="column product-card product-card-1">
            <div className="img-sub" />
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">1.48 USD</p>
              </div>
              <div><a href="checkout.html" data-id={1} className="buy-now-btn green-btn">Buy now</a></div>
            </div>
          </div>
          <div className="column product-card product-card-2">
            <div className="img-sub">
              <p className="discount">- 36 %</p>
            </div>
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">0.28 USD</p>
                <p className="old-price">48.56</p>
              </div>
              <div><a href="checkout.html" data-id={2} className="buy-now-btn green-btn">Buy now</a></div>
            </div>
          </div>
          <div className="column product-card product-card-3">
            <div className="img-sub">
              <p className="discount">- 36 %</p>
            </div>
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">1.12 USD</p>
                <p className="old-price">48.56</p>
              </div>
              <div>
                <a href="checkout.html" data-id={3} className="buy-now-btn green-btn">Buy now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="category-menu container row">
          <div className="column menu">
            <p className="title">Best from Farmers</p>
            <ul>
              <li><a href="#" className="category-item">Carrots</a></li>
              <li><a href="#" className="category-item">Tomatoes</a></li>
              <li><a href="#" className="category-item">Potatoes</a></li>
              <li><a href="#" className="category-item">Chicken</a></li>
              <li><a href="#" className="category-item">Pork</a></li>
              <div className="more-btn products-btn row">
                <a href="#">More products</a>
                <img src="icons/arrow-black-right.svg" alt="arrow icon" />
              </div>
            </ul>
          </div>
          <div className="column product-card product-card-1">
            <div className="img-sub" />
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">2.50 USD</p>
              </div>
              <div><a href="checkout.html" data-id={4} className="buy-now-btn green-btn">Buy now</a></div>
            </div>
          </div>
          <div className="column product-card product-card-2">
            <div className="img-sub">
              <p className="discount">- 36 %</p>
            </div>
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">0.48 USD</p>
                <p className="old-price">36.53</p>
              </div>
              <div><a href="checkout.html" data-id={5} className="buy-now-btn green-btn">Buy now</a></div>
            </div>
          </div>
          <div className="column product-card product-card-3">
            <div className="img-sub">
              <p className="discount">- 36 %</p>
            </div>
            <p className="product-title">Product Title</p>
            <p className="description">Space for a small product description</p>
            <div className="price-row row">
              <div className="column">
                <p className="price">2.87 USD</p>
                <p className="old-price">52.34</p>
              </div>
              <div>
                <a href="checkout.html" data-id={6} className="buy-now-btn green-btn">Buy now</a>
              </div>
            </div>
          </div>
        </section>
        <section className="comment-section">
          <div className="section-title-row container row">
            <p className="section-title title">Our customers says</p>
            <div className="section-btn button-right row">
              <a href="#">Button</a>
              <img src="icons/arrow-green-right.svg" alt="icon" />
            </div>
          </div>
          <div className="comment-row row">
            <div className="left-gradient gradient" />
            <div className="right-gradient gradient" />
            <div className="arrow-left flip">
              <img src="icons/flip-left.svg" alt="left" />
            </div>
            <div className="comment-card column">
              <p className="comment-text">
                “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will
                get all what you need by writiing a text here “
              </p>
              <p className="comment-name">Name and Surname</p>
              <div className="img-container row"><img src="img/comment-avatar-1.png" alt="comment avatar" className="comment-avatar" width={48} height={48} /></div>
            </div>
            <div className="comment-card column">
              <p className="comment-text">
                “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will
                get all what you need by writiing a text here “
              </p>
              <p className="comment-name">Name and Surname</p>
              <div className="img-container row"><img src="img/comment-avatar-2.png" alt="comment avatar" className="comment-avatar" width={48} height={48} /></div>
            </div>
            <div className="comment-card column">
              <p className="comment-text">
                “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will
                get all what you need by writiing a text here “
              </p>
              <p className="comment-name">Name and Surname</p>
              <div className="img-container row"><img src="img/comment-avatar-3.png" alt="comment avatar" className="comment-avatar" width={48} height={48} /></div>
            </div>
            <div className="comment-card column">
              <p className="comment-text">
                “ This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will
                get all what you need by writiing a text here “
              </p>
              <p className="comment-name">Name and Surname</p>
              <div className="img-container row"><img src="img/comment-avatar-4.png" alt="comment avatar" className="comment-avatar" width={48} height={48} /></div>
            </div>
            <div className="arrow-right flip">
              <img src="icons/flip-right.svg" alt="right" />
            </div>
          </div>
        </section>
        <section className="products-section container">
          <div className="section-title-row row">
            <p className="section-title title">Section Headline</p>
            <div className="section-btn button-right row">
              <a href="#">Button</a>
              <img src="icons/arrow-green-right.svg" alt="icon" />
            </div>
          </div>
          <div className="products-row row">
            <div className="column product-card product-card-2">
              <div className="img-sub">
              </div>
              <p className="product-title">Product Title</p>
              <p className="description">Space for a small product description</p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">3.26 USD</p>
                </div>
                <div><a href="checkout.html" data-id={7} className="buy-now-btn green-btn">Buy now</a></div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub">
              </div>
              <p className="product-title">Product Title</p>
              <p className="description">Space for a small product description</p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">0.78 USD</p>
                </div>
                <div><a href="checkout.html" data-id={8} className="buy-now-btn green-btn">Buy now</a></div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub">
                <p className="discount">- 36 %</p>
              </div>
              <p className="product-title">Product Title</p>
              <p className="description">Space for a small product description</p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">4.26 USD</p>
                  <p className="old-price">56.36</p>
                </div>
                <div><a href="checkout.html" data-id={9} className="buy-now-btn green-btn">Buy now</a></div>
              </div>
            </div>
            <div className="column product-card product-card-2">
              <div className="img-sub">
              </div>
              <p className="product-title">Product Title</p>
              <p className="description">Space for a small product description</p>
              <div className="price-row row">
                <div className="column">
                  <p className="price">4.12 USD</p>
                </div>
                <div><a href="checkout.html" data-id={10} className="buy-now-btn green-btn">Buy now</a></div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-post-section container">
          <div className="section-title-row row">
            <p className="section-title title">Read our Blog posts</p>
            <div className="section-btn button-right row">
              <a href="blog.html">Go to Blog</a>
              <img src="icons/arrow-green-right.svg" alt="icon" />
            </div>
          </div>
          <div className="posts-row row">
            <div className="big-blog-card column">
              <div className="top">
                <p className="tag">Dinner tips</p>
              </div>
              <div className="bottom">
                <h2 className="post-title">Our chef tips for a great and tasty dinner ready in 20 minutes</h2>
                <div className="author-row row">
                  <img src="img/blog-avatar-author.png" alt="author avatar" />
                  <p className="author-name">Author</p>
                  <p className="date">17. 6. 2020</p>
                </div>
              </div>
              <div className="gradient" />
            </div>
            <div className="medium-blog-card column">
              <img src="img/blog-img-2.png" alt="" width={269} height={180} />
              <div>
                <p className="tag">Vegetable</p>
              </div>
              <h3 className="post-title">Which vegetable your family will love and want’s eat each day</h3>
              <div className="author-row row">
                <p className="author-name">Author</p>
                <p className="date">15. 6. 2020</p>
              </div>
            </div>
            <div className="column-3 column">
              <div className="row info-row">
                <div className="column info-column">
                  <h3 className="post-title">Salat is kinda good start to your morning routines</h3>
                  <div className="author-row row">
                    <p className="author-name">Author</p>
                    <p className="date">14.1.2020</p>
                  </div>
                </div>
                <div className="column">
                  <img src="img/blog-img-3.png" alt="" />
                </div>
              </div>
              <div className="row info-row">
                <div className="column info-column">
                  <h3 className="post-title">Our chef tips for a great and healthy breakfast</h3>
                  <div className="author-row row">
                    <p className="author-name">Author</p>
                    <p className="date">14.1.2020</p>
                  </div>
                </div>
                <div className="column">
                  <img src="img/blog-img-4.png" alt="" />
                </div>
              </div>
              <div className="row info-row">
                <div className="column info-column">
                  <h3 className="post-title">Prepare a simple and delicious breads</h3>
                  <div className="author-row row">
                    <p className="author-name">Author</p>
                    <p className="date">14.1.2020</p>
                  </div>
                </div>
                <div className="column">
                  <img src="img/blog-img-5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section className="links-section row">
          <div className="column">
            <p className="title">Get in touch</p>
            <ul>
              <li><a href="#" className="link">About Us</a></li>
              <li><a href="#" className="link">Careers</a></li>
              <li><a href="#" className="link">Press Releases</a></li>
              <li><a href="blog.html" className="link">Blog</a></li>
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
    </div>
  );
}

export default Home;