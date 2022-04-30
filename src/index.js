import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Blogs from './views/blogs'
import Profile from './views/profile'
import Index from './views/index'
import BlogPostNFT from './views/blog-post-n-f-t'
import BlogPostSingularity from './views/blog-post-singularity'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Blogs} path="/blogs" />
        <Route exact component={Profile} path="/profilehtml" />
        <Route exact component={Index} path="/" />
        <Route exact component={BlogPostNFT} path="/blog-post-n-f-t" />
        <Route
          exact
          component={BlogPostSingularity}
          path="/blog-post-singularity"
        />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
