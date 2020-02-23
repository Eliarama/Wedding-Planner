import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react'
import Background from '../../assets/background.jpg'
import Navbar from '../../components/Navigation/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = inject('auth')(
	observer(props => (
		<Fragment>
			<img id='background' src={Background} alt='background' />
			<Navbar />
			<main>{props.children}</main>
			<ToastContainer position='bottom-left' autoClose={2500} />
		</Fragment>
	))
)

export default Layout
