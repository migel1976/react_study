import React, {useState} from 'react'
import {BrowserRouter} from 'react-router-dom'
import MyNavbar from './components/UI/navbar/MyNavbar'
import AppRouter from './components/AppRouter'
import {AuthContext} from './context/index'

export function App(){
	const [isAuth, setIsAuth]=useState(false)
	return(
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth}}>
			<BrowserRouter>
				<MyNavbar />
				<AppRouter />
			</BrowserRouter>
		</AuthContext.Provider>
	)
}
