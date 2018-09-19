import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import LeftMenu from '../components/LeftMenu'
import './all.sass'

import "prismjs/plugins/line-numbers/prism-line-numbers.css"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
			<title>Home | Nilton Heck</title>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous" />
		</Helmet>

    <Navbar />

		{children}
  </div>
)

export default TemplateWrapper
