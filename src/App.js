import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'

import MyNavbar from './components/UI/navbar/MyNavbar'

export function App(){
	return(
		<BrowserRouter>
			<MyNavbar />
				<Routes>
					<Route exact path='/about' element={<About />} />
					<Route exact path='/posts' element={<Posts />} />
					<Route path='*' element={<Error />} />
				</Routes>
		</BrowserRouter>
	)
}
