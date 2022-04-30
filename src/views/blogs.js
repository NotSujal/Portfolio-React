import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import './blogs.css'

const Blogs = (props) => {
  return (
    <div className="blogs-container">
      <Helmet>
        <title>Blogs - Sujal Choudhari</title>
        <meta name="description" content="A computer Enthusiast" />
        <meta property="og:title" content="Blogs - Sujal Choudhari" />
        <meta property="og:description" content="A computer Enthusiast" />
      </Helmet>
      <div className="blogs-hero">
        <div className="blogs-fixed-header">
          <Header rootClassName="header-root-class-name1"></Header>
        </div>
        <h1 className="blogs-text text2XL">Blogs</h1>
        <div className="blogs-bg"></div>
      </div>
      <div className="blogs-posts">
        <ArticleCard
          time="Published 13/01/2022"
          title="New Website?"
          Read_More="/index.html"
          image_alt="image"
          image_src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx3ZWJzaXRlfGVufDB8fHx8MTY0MjEyOTg0Nw&amp;ixlib=rb-1.2.1&amp;w=1400"
          avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          description="Yes, I made a new Website today. It has Blogs in it, I was willing to  start a tech and art blog. So I did."
        ></ArticleCard>
        <div className="blogs-container1 grow-on-hover_less">
          <img
            alt="image"
            src="https://lh3.googleusercontent.com/uizczvpSy7qi2YjRiOBKqppoCN61g1BWl28DVZP6ddjHPjZlnct4dqLKDzvgDaUmJh8aEHy5zww5IZ693Mmy3ph2nQ-T3PXzHPCN=s130"
            className="blogs-image"
          />
          <div className="blogs-container2">
            <h3 className="blogs-text1 healine">NFT Collection is now Live</h3>
            <div className="blogs-container3">
              <span className="blogs-text2">
                I have successfully produced an NFT collection. I call it
                DotGalaxy it&apos;s an algorithmically rendered image.
              </span>
              <Link to="/blog-post-n-f-t" className="blogs-navlink textSM">
                <span className="blogs-text3">Read More?</span>
              </Link>
            </div>
            <div className="blogs-container4">
              <div className="blogs-container5">
                <div className="blogs-container6">
                  <span className="blogs-text4 textSM">
                    Published 25/04/2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Blogs
