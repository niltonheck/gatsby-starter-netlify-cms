import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import LeftMenu from '../components/LeftMenu'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
			<title>Home | Gatsby + Netlify CMS</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
		</Helmet>

    <Navbar />

		<div className="container content">
			<div className="columns">
				<div className="column is-four-fifth has-text-centered">{children}</div>
				<div className="column is-one-fifth is-offset-1">
					<LeftMenu />
				</div>
			</div>
		</div>
  </div>
)

export default TemplateWrapper
