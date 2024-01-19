import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Judicious Alive Dunlin</title>
        <meta property="og:title" content="Judicious Alive Dunlin" />
      </Helmet>
    </div>
  )
}

export default Home
