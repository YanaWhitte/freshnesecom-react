const Blog = () => {
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
                    <a href="index.html"><img src="img/logo.svg" alt="logo" /></a>
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
                    <img src="icons/arrow-small-down.svg" alt="arrow" />
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
                <section className="path-section container row">
                    <a href="index.html" className="home">Homepage</a>
                    <p className="slash">/</p>
                    <p className="sel-cat">Blog</p>
                </section>
                <section className="title-nav container row">
                    <div>
                        <h1 className="title">Blog</h1>
                    </div>
                    <div className="right-row row">
                        <div className="row">
                            <label className="block view row">
                                <input type="radio" name="list" />
                                <div className="grid-view" />
                                <p className="view-text">Grid view</p>
                            </label>
                            <label className="block view row">
                                <input type="radio" name="list" defaultChecked />
                                <div className="list-view" />
                                <p className="view-text">List view</p>
                            </label>
                        </div>
                        <div className="block row">
                            <div className="green-tag">117</div>
                            <p>Products</p>
                        </div>
                    </div>
                </section>
                <section className="blog-post-section top-blog">
                    <div className="posts-row row">
                        <div className="big-blog-card card-1 column">
                            <div className="top">
                                <p className="tag">Tag</p>
                            </div>
                            <div className="bottom">
                                <h2 className="post-title">This is a space for your blog headline, it can be long don’t worry about
                                    that</h2>
                                <div className="author-row row">
                                    <img src="img/blog-avatar-author.png" alt="author avatar" />
                                    <p className="author-name">Author</p>
                                    <p className="date">17. 6. 2020</p>
                                </div>
                            </div>
                            <div className="gradient" />
                        </div>
                        <div className="big-blog-card card-2 column">
                            <div className="top">
                                <p className="tag">Tag</p>
                            </div>
                            <div className="bottom">
                                <h2 className="post-title">This is a space for your blog headline, it can be long don’t worry about
                                    that</h2>
                                <div className="author-row row">
                                    <img src="img/blog-avatar-author.png" alt="author avatar" />
                                    <p className="author-name">Author</p>
                                    <p className="date">17. 6. 2020</p>
                                </div>
                            </div>
                            <div className="gradient" />
                        </div>
                    </div>
                </section>
                <section className="blog-section row">
                    <section className="blog-menu column">
                        <div className="list archive-list column">
                            <p className="title">Archives</p>
                            <a href="#">March 2020</a>
                            <a href="#">February 2020</a>
                            <a href="#">January 2020</a>
                            <a href="#">November 2019</a>
                            <a href="#">December 2019</a>
                        </div>
                        <div className="list category-list column">
                            <p className="title">Category</p>
                            <a href="#">Food</a>
                            <a href="#">Chefs specialities</a>
                            <a href="#">Vegetable</a>
                            <a href="#">Meat</a>
                            <a href="#">Recommendations</a>
                        </div>
                        <div className="join-list column">
                            <p className="title">Join our list</p>
                            <p className="caption">Signup to be the first to hear about exclusive deals, special offers, recepies
                                from our masters and others.</p>
                            <div className="subscribe-btn row">
                                <input type="email" name="email" placeholder="Your email address" />
                                <p className="sub-btn">Subscribe</p>
                            </div>
                        </div>
                    </section>
                    <section className="blog-posts column">
                        <div className="posts-row row">
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-1.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-2.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-3.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="posts-row row">
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-4.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-5.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-6.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="posts-row row">
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-7.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column">
                                <img src="img/blog-page-8.png" alt="blog image" />
                                <div>
                                    <p className="green-tag">Tag</p>
                                </div>
                                <h3 className="title">Space for your heding is here, write what you need</h3>
                                <div className="author-row row">
                                    <p className="author-name">Author</p>
                                    <p className="date">15. 6. 2020</p>
                                </div>
                            </div>
                            <div className="medium-blog-card column" />
                        </div>
                    </section>
                </section>
                <section className="page-nav row">
                    <div className="pages row">
                        <p className="caption">Page:</p>
                        <a href="#" className="page active">1</a>
                        <a href="#" className="page">2</a>
                        <a href="#" className="page">3</a>
                        <a href="#" className="page">4</a>
                    </div>
                    <div className="green-btn row">
                        <a href="#">Next page</a>
                        <img src="icons/arrow-right-white.svg" alt="arrow" />
                    </div>
                    <div className="value-prod row">
                        <p className="green-tag">198</p>
                        <p className="name">Articles</p>
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

export default Blog;