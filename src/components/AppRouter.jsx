import React from 'react'
import Posts from '../pages/Posts'
import Login from '../pages/Login'
import {Route, Routes} from 'react-router-dom'
import {publicRoutes, privateRoutes} from '../router/index'
 

const AppRouter =()=>{
	const isAuth=false
	return(
			isAuth
			?
				<Routes>
					{privateRoutes.map(route=>
						<Route
							element={route.component}
							path={route.path}
							exact={route.exact}
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
						/>
					)}
					<Route path='*' element={<Login />} />
				</Routes>
	)
}
export default AppRouter
