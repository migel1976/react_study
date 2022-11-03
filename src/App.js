import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import MyNavbar from './components/UI/navbar/MyNavbar'
import AppRouter from './components/AppRouter'

export function App(){
	return(
		<BrowserRouter>
			<MyNavbar />
			<AppRouter />
		</BrowserRouter>
	)
}
