import React,{useContext}  from 'react'
import Posts from '../pages/Posts'
import Login from '../pages/Login'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes, privateRoutes} from '../router/index'
import {AuthContext} from '../context/index'
 

const AppRouter =()=>{
	const {isAuth}=useContext(AuthContext)
	return(
			isAuth
			?
				<Routes>
					{privateRoutes.map(route=>
						<Route
							element={route.component}
							path={route.path}
							exact={route.exact}
							key={route.path}
						/>
					)}
					<Route path='*' element={<Posts />} />
				</Routes>
			:
				<Routes>
					{publicRoutes.map(route=>
						<Route
							element={route.component}
							path={route.path}
							exact={route.exact}
							key={route.path}
						/>
					)}
					<Route path='*' element={<Login />} />
				</Routes>
	)
}
export default AppRouter
