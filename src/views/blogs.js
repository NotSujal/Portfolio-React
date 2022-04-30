import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
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
        <div className="blogs-n-f-t grow-on-hover_less">
          <img
            alt="image"
            src="https://lh3.googleusercontent.com/uizczvpSy7qi2YjRiOBKqppoCN61g1BWl28DVZP6ddjHPjZlnct4dqLKDzvgDaUmJh8aEHy5zww5IZ693Mmy3ph2nQ-T3PXzHPCN=s130"
            className="blogs-image"
          />
          <div className="blogs-container01">
            <h3 className="blogs-text01 healine">NFT Collection is now Live</h3>
            <div className="blogs-container02">
              <span className="blogs-text02">
                <span>
                  ..I have successfully produced an NFT collection. I call it
                  DotGalaxy it&apos;s an algorithmically rendered ....
                </span>
              </span>
              <Link to="/blog-post-n-f-t" className="blogs-navlink textSM">
                <span className="blogs-text04">Read More?</span>
              </Link>
            </div>
            <div className="blogs-container03">
              <div className="blogs-container04">
                <div className="blogs-container05">
                  <span className="blogs-text05 textSM">
                    Published 25/04/2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-singularity grow-on-hover_less">
          <img
            alt="image"
            src="https://img.itch.zone/aW1nLzg2MDgxNTcucG5n/original/qn0lQ8.png"
            className="blogs-image1"
          />
          <div className="blogs-container06">
            <h3 className="blogs-text06 healine">Singularity</h3>
            <div className="blogs-container07">
              <span className="blogs-text07">
                Singularity Clicker is a Simple Clicker Game and a tale of the
                reason behind the birth of Infinity. There is a special .......
              </span>
              <Link
                to="/blog-post-singularity"
                className="blogs-navlink1 textSM"
              >
                <span className="blogs-text08">Read More?</span>
              </Link>
            </div>
            <div className="blogs-container08">
              <div className="blogs-container09">
                <div className="blogs-container10">
                  <span className="blogs-text09 textSM">
                    <span>Published 15/04</span>
                    <span>/2022</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blogs-new-website grow-on-hover_less">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHx3ZWJzaXRlfGVufDB8fHx8MTY0MjEyOTg0Nw&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="blogs-image2"
          />
          <div className="blogs-container11">
            <h3 className="blogs-text12 healine">New Website?</h3>
            <div className="blogs-container12">
              <span className="blogs-text13">
                Yes, I made a new Website today. It has Blogs in it, I was
                willing to start a tech and art blog. So .I did.
              </span>
            </div>
            <div className="blogs-container13">
              <div className="blogs-container14">
                <div className="blogs-container15">
                  <span className="blogs-text14 textSM">
                    Published 13/01/2022
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
