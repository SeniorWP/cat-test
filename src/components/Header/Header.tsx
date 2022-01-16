import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import './header.css'
import logo from '../../img/logo.png'
const Header: FC = () => {
	return (
		<div className='header'>
			<Link to='/'>
				<img width={130} src={logo} alt='logo' />
			</Link>
		</div>
	)
}

export default Header
