import React from 'react'

import PropTypes from 'prop-types'

import './article-card.css'

const ArticleCard = (props) => {
  return (
    <div className="article-card-container grow-on-hover_less">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="article-card-image"
      />
      <div className="article-card-container1">
        <h3 className="article-card-text healine">{props.title}</h3>
        <div className="article-card-container2">
          <span className="article-card-text1">{props.description}</span>
          <a
            href={props.Read_More}
            target="_blank"
            rel="noreferrer noopener"
            className="article-card-link textSM"
          >
            <span className="article-card-text2">Read More?</span>
          </a>
        </div>
        <div className="article-card-container3">
          <div className="article-card-container4">
            <div className="article-card-container5">
              <span className="article-card-text3 textSM">{props.time}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  Read_More: '/',
  title: 'Portofino one of the best for remote working',
  image_src: '801cefa0-0895-45c9-a05f-5cc268a4db11',
  time: 'Published 3 days ago',
  description:
    "Finding temporary housing should be as easy as renting an Airbnb. That's th e idea behinf portofino, which raised $65 million to expand its pet sitting businesses. This come as the right move for the investment while the planet is moving on work from home...",
  image_alt: 'image',
}

ArticleCard.propTypes = {
  Read_More: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
