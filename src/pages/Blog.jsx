import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Blog = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="path-section container row">
                    <Link to="/home" className="home">Homepage</Link>
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
            <Footer />
        </div>
    );
}

export default Blog;