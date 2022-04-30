import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import Footer from '../components/footer'
import './blog-post-singularity.css'

const BlogPostSingularity = (props) => {
  return (
    <div className="blog-post-singularity-container">
      <Helmet>
        <title>BlogPost-Singularity - Sujal Choudhari</title>
        <meta name="description" content="A computer Enthusiast" />
        <meta
          property="og:title"
          content="BlogPost-Singularity - Sujal Choudhari"
        />
        <meta property="og:description" content="A computer Enthusiast" />
      </Helmet>
      <div className="blog-post-singularity-hero">
        <div className="blog-post-singularity-fixed-header">
          <Header rootClassName="header-root-class-name2"></Header>
        </div>
        <a
          href="https://notsujal.itch.io/singularity"
          target="_blank"
          rel="noreferrer noopener"
          className="blog-post-singularity-link"
        >
          <h1 className="blog-post-singularity-text text2XL">
            Singularity Clicker: The Birth of Infinity
          </h1>
        </a>
        <div className="blog-post-singularity-bg"></div>
      </div>
      <div className="blog-post-singularity-post-details">
        <div className="blog-post-singularity-container1">
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="blog-post-singularity-icon"
          >
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-singularity-text01 textXL">
          Posted 15/04/2022
        </span>
        <span className="blog-post-singularity-text02">
          <span className="blog-post-singularity-text03">
            &quot;The game is simple and has mathematical numbers that I
            didn&apos;t know, I liked it and the furthest I got was 10,142
            Vigintillion.&quot; -Host
          </span>
        </span>
        <span className="blog-post-singularity-text04">
          <span>
            Singularity Clicker is a Simple Clicker Game and a tale
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <br></br>
          <span>
            of the reason behind the birth of Infinity.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <br></br>
          <span>
            There is a special end to this game
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span></span>
          <br></br>
          <span>This game is made with</span>
          <a
            href="https://github.com/NotSujal/neptune.js"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="blog-post-singularity-text12">
              {' '}
              Neptune.js Framework
            </span>
          </a>
          <span>
            .
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            This game is a submission to the
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <a
            href="https://itch.io/jam/floppy-disk-jam"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="blog-post-singularity-text15">
              Floppy Disk Jam,
            </span>
          </a>
          <br></br>
          <span></span>
          <br></br>
          <span>
            {' '}
            and is made within the limits and theme of jam. Check out the Jam
            and other submissions as well.
          </span>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Neptune.js is a quick framework i threw together for the sake of
            game jam. Its a good framework espicially when you have less time
            more things to do. I chose JavaScript over other languages, because
            it runs in the Browser which will save me some memory space, which
            was a limitation of the Game Jam.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Singularity is a nice Game, not the Best Clicker game, but a descent
            game which will keep you busy for quite a while. Was not expecting a
            positive feed back but the game rescived a good feedback.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            &quot;after about an hour, I made it to infinity. No real feedback
            bc it&apos;s already well made. Great job!&quot; - mrmufinz
          </span>
          <br></br>
          <span>
            &quot;Finally got to try it. Solid clicker experience dude!&quot;-
            Seth Funk
          </span>
          <br></br>
          <span>&quot;The game looks great&quot;- Jafygames</span>
          <br></br>
          <span></span>
          <br></br>
          <span>I am looking forward for making more game in Neptune.js</span>
          <span></span>
        </span>
      </div>
      <div className="blog-post-singularity-container2"></div>
      <div className="blog-post-singularity-posts">
        <div className="blog-post-singularity-container3">
          <Label text="STORIES"></Label>
          <h3 className="blog-post-singularity-text42 healine">
            <span className="blog-post-singularity-text43">Before I go </span>
          </h3>
          <a
            href="https://opensea.io/notsujal"
            target="_blank"
            rel="noreferrer noopener"
            className="blog-post-singularity-link3 textXL"
          >
            <span>
              Here is the link to my collection so you could check it out.
            </span>
            <br></br>
            <span>https://opensea.io/notsujal</span>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPostSingularity
