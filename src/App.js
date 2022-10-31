import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'

export function App(){
	return(
		<BrowserRouter>
			<Routes>
				<div className='navbar'>
					<div className='navbar__links'>
						<a href='/about'>About</a>
						<a href='/posts'>Posts</a>
					</div>
				</div>
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Posts />} />
			</Routes>
		</BrowserRouter>)
}

