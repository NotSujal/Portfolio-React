import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import Footer from '../components/footer'
import './blog-post-n-f-t.css'

const BlogPostNFT = (props) => {
  return (
    <div className="blog-post-n-f-t-container">
      <Helmet>
        <title>BlogPost-NFT - Sujal Choudhari</title>
        <meta name="description" content="A computer Enthusiast" />
        <meta property="og:title" content="BlogPost-NFT - Sujal Choudhari" />
        <meta property="og:description" content="A computer Enthusiast" />
      </Helmet>
      <div className="blog-post-n-f-t-hero">
        <div className="blog-post-n-f-t-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <h1 className="blog-post-n-f-t-text text2XL">NFT Collection</h1>
        <div className="blog-post-n-f-t-bg"></div>
      </div>
      <div className="blog-post-n-f-t-post-details">
        <div className="blog-post-n-f-t-container1">
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="blog-post-n-f-t-icon"
          >
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-n-f-t-text01 textXL">Posted 25/04/2022</span>
        <span className="blog-post-n-f-t-text02">
          <span className="blog-post-n-f-t-text03">
            “It is a form of digital ledger.”
          </span>
        </span>
        <span className="blog-post-n-f-t-text04">
          <span className="blog-post-n-f-t-text05">
            Hello, I rescently made a NFT collection over opensea.io.
          </span>
          <br></br>
          <span>
            I enjoyed making a NFT collection, it was a great exprience. This is
            my first-ever collection. I made it with the help of Python Image
            Library.
          </span>
          <br></br>
          <span>
            With the help of the code, I was able to generate around 20-30
            pieces of art, out of which I selected best 10 and created a
            collections for lowest price possible.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            I was already working of a argorithmically generated artworks made
            some a few months ago, shared the art with some of my friends over
            discord. At that time I was unaware of the NFT hype and was also
            unable to find the platform which takes 0 gas fee.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            A few days prior today it came to my perception that there is a
            platform (opesea.io: polygon blockchain) is free to use.
          </span>
          <br></br>
          <span>
            I instantly created a new set of rules for my algorithm, added new
            equations, randomness and created the code which generates
            Galaxies.. Isnt this Great?
          </span>
        </span>
      </div>
      <div className="blog-post-n-f-t-container2"></div>
      <div className="blog-post-n-f-t-posts">
        <div className="blog-post-n-f-t-container3">
          <Label text="STORIES"></Label>
          <h3 className="blog-post-n-f-t-text20 healine">
            <span className="blog-post-n-f-t-text21">Before I go </span>
          </h3>
          <span className="blog-post-n-f-t-text22 textXL">
            <span>
              Here is the link to my collection so you could check it out.
            </span>
            <br></br>
            <span>https://opensea.io/notsujal</span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPostNFT
