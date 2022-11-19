import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import MyButton from '../button/MyButton'
import {AuthContext} from '../../../context'

const MyNavbar=()=>{
	const {isAuth, setIsAuth}=useContext(AuthContext)
	const exit=(e)=>{
		e.preventDefault()
		setIsAuth(false)
	}
	return(
				<div className='navbar'>
					<MyButton
						onClick={exit}
					>
						Выйти
					</MyButton>
					<div className='navbar__links'>
						<Link to ='/about'>About</Link>
						<Link to ='/posts'>Posts</Link>
					</div>
				</div>
	)
}
export default MyNavbar
