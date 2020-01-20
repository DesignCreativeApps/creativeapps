import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet';
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./Blog.css"
import headerStyles from '../components/header.module.css';

const SecondPage = () => (
    <Layout>
        <Helmet bodyAttributes={{ class: headerStyles.others }} />
        <section className="othersSection">
            <h1>Blog</h1>
            <div>
                <article className="post-item">
                    <figure className="post-item__info">
                        <img alt="Machine learning business value" className="post-item__img" src='/images/machine.jpeg'/>
                        <figcaption class="post-item__caption">
                            <h3 class="post-item__title">
                                Innovation can be low tech
                            </h3>
                            <div class="post-item__tags">
                               Tech
                            </div>
                            <div class="article-copyright vcard">
                                <img class="article-copyright__avatar" src="/images/luca-cimonetti.jpg" alt="Daria lopukhina" data-pagespeed-url-hash="40332847" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                <div class="article-copyright__description">
                                    <span class="article-copyright__authors-list">
                                       Luca Cimonetti
                                    </span>

                                    <time class="article-copyright__date" datetime="2019-12-20">
                                        December 20, 2019
                                    </time>

                                </div>
                            </div>

                        </figcaption>
                    </figure>
                    <div class="post-item__annotation" data-link="/blog/how-machine-learning-can-unlock-new-business-opportunities">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                </article>
                <article className="post-item">
                    <figure className="post-item__info">
                        <img alt="Machine learning business value" className="post-item__img" src='/images/machine.jpeg'/>
                        <figcaption class="post-item__caption">
                            <h3 class="post-item__title">
                                The machine learning hype
                            </h3>
                            <div class="post-item__tags">
                               Tech
                            </div>
                            <div class="article-copyright vcard">
                                <img class="article-copyright__avatar" src="/images/elia.jpg" alt="Daria lopukhina" data-pagespeed-url-hash="40332847" onload="pagespeed.CriticalImages.checkImageForCriticality(this);" />
                                <div class="article-copyright__description">
                                    <span class="article-copyright__authors-list">
                                       Elia Rigo
                                    </span>

                                    <time class="article-copyright__date" datetime="2019-12-20">
                                        November 15, 2019
                                    </time>

                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <div class="post-item__annotation" data-link="/blog/how-machine-learning-can-unlock-new-business-opportunities">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    </div>
                </article>
                
            </div>
        </section>
    </Layout>
)

export default SecondPage


