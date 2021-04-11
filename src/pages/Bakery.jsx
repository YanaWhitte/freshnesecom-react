const Bakery = () => {
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
                    <p className="sel-cat">Bakery</p>
                </section>
                <section className="title-nav container row">
                    <div>
                        <h1 className="title">Bakery</h1>
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
                <section className="main-filtres container">
                    <div className="row">
                        <div className="row filter-block">
                            <label className="label-radio row">
                                <input type="radio" name="filter-text" />
                                <div className="radio-icon" />
                                <p className="radio-name">Filter text</p>
                            </label>
                            <label className="label-radio row">
                                <input type="radio" name="filter-text" defaultChecked />
                                <div className="radio-icon" />
                                <p className="radio-name">Filter text</p>
                            </label>
                        </div>
                        <div className="row filter-block">
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <p className="check-name">Filter</p>
                            </label>
                            <label className="nbm-filter row">
                                <input type="checkbox" name="check-filter" />
                                <p className="tag-name">Nbm</p>
                            </label>
                        </div>
                        <div className="row filter-block">
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <p className="check-name">Filter</p>
                            </label>
                            <label className="nbm-filter row">
                                <input type="checkbox" name="check-filter" />
                                <p className="tag-name">Nbm</p>
                            </label>
                        </div>
                        <div className="row filter-block">
                            <div className="left row">
                                <label className="check-filter row">
                                    <input type="checkbox" name="check-filter" defaultChecked />
                                    <div className="check-icon" />
                                    <p className="check-name">Filter</p>
                                </label>
                                <label className="nbm-filter row">
                                    <input type="checkbox" name="check-filter" />
                                    <p className="tag-name">12</p>
                                </label>
                            </div>
                            <div className="select-block right row">
                                <p>Select</p>
                                <img src="icons/select-icon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="tags-row row">
                        <p className="caption">Applied filtres:</p>
                        <label className="label-tag row">
                            <input type="checkbox" name="check-tag" />
                            <p className="tag-name">Selected Filter</p>
                            <div className="cross-icon" />
                        </label>
                        <label className="label-tag row">
                            <input type="checkbox" name="check-tag" />
                            <p className="tag-name">Selected Filter</p>
                            <div className="cross-icon" />
                        </label>
                    </div>
                </section>
                <section className="main-prod-section row">
                    <div className="product-filters column">
                        <div className="filters-column categories column">
                            <h2 className="filter-title">Categories</h2>
                            <div className="cat-name row">
                                <p className="name">Category name</p>
                                <p className="value green-tag">320</p>
                            </div>
                            <div className="cat-name row">
                                <p className="name">Category name</p>
                                <p className="value green-tag">112</p>
                            </div>
                            <div className="cat-name row">
                                <p className="name">Category name</p>
                                <p className="value green-tag">32</p>
                            </div>
                            <div className="cat-name row">
                                <p className="name">Category name</p>
                                <p className="value green-tag">48</p>
                            </div>
                        </div>
                        <div className="filters-column brands column">
                            <h2 className="filter-title">Brands</h2>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <p className="check-name">Filter by brand item</p>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" defaultChecked />
                                <div className="check-icon" />
                                <p className="check-name">Filter by brand item</p>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" defaultChecked />
                                <div className="check-icon" />
                                <p className="check-name">Filter by brand item</p>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <p className="check-name">Filter by brand item</p>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <p className="check-name">Filter by brand item</p>
                            </label>
                        </div>
                        <div className="filters-column rating column">
                            <h2 className="filter-title">Rating</h2>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <div className="stars row">
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                </div>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <div className="stars row">
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                </div>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <div className="stars row">
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                </div>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <div className="stars row">
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                </div>
                            </label>
                            <label className="check-filter row">
                                <input type="checkbox" name="check-filter" />
                                <div className="check-icon" />
                                <div className="stars row">
                                    <img src="icons/star-yellow.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                    <img src="icons/star-transparent.svg" alt="star" className="star" />
                                </div>
                            </label>
                        </div>
                        <div className="filters-column price column">
                            <h2 className="filter-title">Price</h2>
                            <div className="slider row">
                                <div className="line" />
                                <div className="line" />
                                <div className="line" />
                                <div className="circle" />
                                <div className="circle" />
                            </div>
                            <div className="minmax row">
                                <div className="from column">
                                    <p>Min</p>
                                    <input type="text" name="price" placeholder={0} />
                                </div>
                                <div className="hyphen column">-</div>
                                <div className="to column">
                                    <p>Max</p>
                                    <input type="text" name="price" placeholder={000} />
                                </div>
                            </div>
                            <div className="button-row">
                                <a href="#" className="green-btn">Apply</a>
                                <a href="#" className="reset-btn">Reset</a>
                            </div>
                        </div>
                    </div>
                    <div className="product-cards column">
                        <div className="big-product-card row">
                            <div className="img-container">
                                <div className="img-sub" />
                            </div>
                            <div className="card-info row">
                                <div className="chara-info column">
                                    <h3 className="product-name">Product title</h3>
                                    <p className="description">Space for a small product description</p>
                                    <div className="rating row">
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black-transparent.svg" alt="star" />
                                    </div>
                                    <div className="basic-info row">
                                        <div className="column column-1">
                                            <p>Fresheness</p>
                                            <p>Farm</p>
                                            <p>Delivery</p>
                                            <p>Stock</p>
                                        </div>
                                        <div className="column">
                                            <p><span className="green">New</span> (Extra fresh)</p>
                                            <p>Grocery Tarm Fields</p>
                                            <p>Europe</p>
                                            <p className="green">320 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info column">
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56</p>
                                    </div>
                                    <div className="delivery-info">
                                        <p className="ship-bold">Free Shipping</p>
                                        <p>Delivery in 1 day</p>
                                    </div>
                                    <div className="buttons-div">
                                        <div className="detail-btn row">
                                            <a href="product-info.html">Product Detail</a>
                                            <img src="icons/arrow-right-white.svg" alt="arrow" />
                                        </div>
                                        <div className="wish-btn row">
                                            <img src="icons/heart-icon.svg" alt="heart" />
                                            <a href="#">Add to wish list</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big-product-card row">
                            <div className="img-container">
                                <div className="img-sub" />
                            </div>
                            <div className="card-info row">
                                <div className="chara-info column">
                                    <h3 className="product-name">Product title</h3>
                                    <p className="description">Space for a small product description</p>
                                    <div className="rating row">
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black-transparent.svg" alt="star" />
                                    </div>
                                    <div className="basic-info row">
                                        <div className="column column-1">
                                            <p>Fresheness</p>
                                            <p>Farm</p>
                                            <p>Delivery</p>
                                            <p>Stock</p>
                                        </div>
                                        <div className="column">
                                            <p><span className="green">New</span> (Extra fresh)</p>
                                            <p>Grocery Tarm Fields</p>
                                            <p>Europe</p>
                                            <p className="green">320 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info column">
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56</p>
                                    </div>
                                    <div className="delivery-info">
                                        <p className="ship-bold">Free Shipping</p>
                                        <p>Delivery in 1 day</p>
                                    </div>
                                    <div className="buttons-div">
                                        <div className="detail-btn row">
                                            <a href="product-info.html">Product Detail</a>
                                            <img src="icons/arrow-right-white.svg" alt="arrow" />
                                        </div>
                                        <div className="wish-btn row">
                                            <img src="icons/heart-icon.svg" alt="heart" />
                                            <a href="#">Add to wish list</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big-product-card row">
                            <div className="img-container">
                                <div className="img-sub" />
                            </div>
                            <div className="card-info row">
                                <div className="chara-info column">
                                    <h3 className="product-name">Product title</h3>
                                    <p className="description">Space for a small product description</p>
                                    <div className="rating row">
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black-transparent.svg" alt="star" />
                                    </div>
                                    <div className="basic-info row">
                                        <div className="column column-1">
                                            <p>Fresheness</p>
                                            <p>Farm</p>
                                            <p>Delivery</p>
                                            <p>Stock</p>
                                        </div>
                                        <div className="column">
                                            <p><span className="green">New</span> (Extra fresh)</p>
                                            <p>Grocery Tarm Fields</p>
                                            <p>Europe</p>
                                            <p className="green">320 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info column">
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56</p>
                                    </div>
                                    <div className="delivery-info">
                                        <p className="ship-bold">Free Shipping</p>
                                        <p>Delivery in 1 day</p>
                                    </div>
                                    <div className="buttons-div">
                                        <div className="detail-btn row">
                                            <a href="product-info.html">Product Detail</a>
                                            <img src="icons/arrow-right-white.svg" alt="arrow" />
                                        </div>
                                        <div className="wish-btn row">
                                            <img src="icons/heart-icon.svg" alt="heart" />
                                            <a href="#">Add to wish list</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big-product-card row">
                            <div className="img-container">
                                <div className="img-sub" />
                            </div>
                            <div className="card-info row">
                                <div className="chara-info column">
                                    <h3 className="product-name">Product title</h3>
                                    <p className="description">Space for a small product description</p>
                                    <div className="rating row">
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black-transparent.svg" alt="star" />
                                    </div>
                                    <div className="basic-info row">
                                        <div className="column column-1">
                                            <p>Fresheness</p>
                                            <p>Farm</p>
                                            <p>Delivery</p>
                                            <p>Stock</p>
                                        </div>
                                        <div className="column">
                                            <p><span className="green">New</span> (Extra fresh)</p>
                                            <p>Grocery Tarm Fields</p>
                                            <p>Europe</p>
                                            <p className="green">320 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info column">
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56</p>
                                    </div>
                                    <div className="delivery-info">
                                        <p className="ship-bold">Free Shipping</p>
                                        <p>Delivery in 1 day</p>
                                    </div>
                                    <div className="buttons-div">
                                        <div className="detail-btn row">
                                            <a href="product-info.html">Product Detail</a>
                                            <img src="icons/arrow-right-white.svg" alt="arrow" />
                                        </div>
                                        <div className="wish-btn row">
                                            <img src="icons/heart-icon.svg" alt="heart" />
                                            <a href="#">Add to wish list</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="big-product-card row">
                            <div className="img-container">
                                <div className="img-sub" />
                            </div>
                            <div className="card-info row">
                                <div className="chara-info column">
                                    <h3 className="product-name">Product title</h3>
                                    <p className="description">Space for a small product description</p>
                                    <div className="rating row">
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black.svg" alt="star" />
                                        <img src="icons/star-black-transparent.svg" alt="star" />
                                    </div>
                                    <div className="basic-info row">
                                        <div className="column column-1">
                                            <p>Fresheness</p>
                                            <p>Farm</p>
                                            <p>Delivery</p>
                                            <p>Stock</p>
                                        </div>
                                        <div className="column">
                                            <p><span className="green">New</span> (Extra fresh)</p>
                                            <p>Grocery Tarm Fields</p>
                                            <p>Europe</p>
                                            <p className="green">320 pcs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="price-info column">
                                    <div className="price-div">
                                        <p className="price">36.99 USD</p>
                                        <p className="old-price">48.56</p>
                                    </div>
                                    <div className="delivery-info">
                                        <p className="ship-bold">Free Shipping</p>
                                        <p>Delivery in 1 day</p>
                                    </div>
                                    <div className="buttons-div">
                                        <div className="detail-btn row">
                                            <a href="product-info.html">Product Detail</a>
                                            <img src="icons/arrow-right-white.svg" alt="arrow" />
                                        </div>
                                        <div className="wish-btn row">
                                            <img src="icons/heart-icon.svg" alt="heart" />
                                            <a href="#">Add to wish list</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-nav row">
                    <div className="pages row">
                        <p className="caption">Page:</p>
                        <a href="#" className="page">1</a>
                        <a href="#" className="page">2</a>
                        <a href="#" className="page active">3</a>
                        <a href="#" className="page">4</a>
                    </div>
                    <div className="green-btn row">
                        <a href="#">Show more products</a>
                        <img src="icons/arrow-down-white.svg" alt="arrow" />
                    </div>
                    <div className="value-prod row">
                        <p className="green-tag">336</p>
                        <p className="name">Products</p>
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

export default Bakery;