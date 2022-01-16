import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import CatPage from './components/Cats/CatPage/CatPage'
import Home from './components/Cats/Home/Home'

const App: React.FC = () => {
	return (
		<div className='app__wrapper'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:slug' element={<CatPage />} />
			</Routes>
		</div>
	)
}

export default App
