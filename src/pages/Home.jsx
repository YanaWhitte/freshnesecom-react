import Header from "../components/Header/Header";
import CommentSliderContainer from "../components/CommentSliderContainer";
import CategoryMenu from "../components/Menu/CategoryMenu";
import BannerCards from "../components/Cards/BannerCards";
import SmallProductCardsHolder from "../components/Cards/SmallProductCardsHolder";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="category-menu container row">
          <CategoryMenu title={"Category menu"}
            menuItems={[
              { path: "bakery", body: "Bakery" },
              { path: "fruit-and-vegetables", body: "Fruit and vegetables" },
              { path: "meat-and-fish", body: "Meat and fish" },
              { path: "drinks", body: "Drinks" },
              { path: "kitchen", body: "Kitchen" },
            ]}
          />
          <BannerCards />
        </section>
        <section className="category-menu container row">
          <CategoryMenu title={"Best selling products"}
            menuItems={[
              { path: "bakery", body: "Kitchen" },
              { path: "fruit-and-vegetables", body: "Meat and fish" },
              { path: "meat-and-fish", body: "Special nutrition" },
              { path: "drinks", body: "Pharmacy" },
              { path: "kitchen", body: "Baby" },
            ]} />
          <SmallProductCardsHolder />
        </section>
        <section className="category-menu container row">
          <CategoryMenu title={"Best from Farmers"}
            menuItems={[
              { path: "kitchen", body: "Carrots" },
              { path: "kitchen", body: "Tomatoes" },
              { path: "meat-and-fish", body: "Potatoes" },
              { path: "drinks", body: "Chicken" },
              { path: "kitchen", body: "Pork" },
            ]} />
          <SmallProductCardsHolder />
        </section>
        <CommentSliderContainer />
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
                <div><Link to="/checkout" data-id={7} className="buy-now-btn green-btn">Buy now</Link></div>
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
                <div><Link to="/checkout" data-id={8} className="buy-now-btn green-btn">Buy now</Link></div>
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
                <div><Link to="/checkout" data-id={9} className="buy-now-btn green-btn">Buy now</Link></div>
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
                <div><Link to="/checkout" data-id={10} className="buy-now-btn green-btn">Buy now</Link></div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-post-section container">
          <div className="section-title-row row">
            <p className="section-title title">Read our Blog posts</p>
            <div className="section-btn button-right row">
              <Link to="/blog">Go to Blog</Link>
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
    </div>
  );
}

export default Home;