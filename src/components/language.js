import React from 'react'

import PropTypes from 'prop-types'

import './language.css'

const Language = (props) => {
  return (
    <div className="language-container">
      <h1 className="language-text textXL">{props.number}</h1>
    </div>
  )
}

Language.defaultProps = {
  number: '22',
}

Language.propTypes = {
  number: PropTypes.string,
}

export default Language
