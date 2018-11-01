import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'
import Socialbar from '../components/SocialBar'


import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Herramientas Akashicas - Matías Nuñez">
      <link href="https://fonts.googleapis.com/css?family=Oxygen+Mono" rel="stylesheet" />
    </Helmet>
    <div  style={{ backgroundImage: 'url(/img/bkg_init.png)'}}>
      <Socialbar />
      <TopBar />
      <div className="line" />
      <Navbar />
    </div>
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
