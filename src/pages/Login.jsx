import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import {AuthContext} from '../context'

const Login=()=>{
	const {isAuth, setIsAuth}=useContext(AuthContext)
	const submit=(e)=>{
		e.preventDefault()
		setIsAuth(true)
	}
	return(
		<div>
			<h1>Login page</h1>
			<form onSubmit={submit}>
				<MyInput type='text' placeholder='Login' />
				<MyInput type='password' placeholder='Password' />
				<MyButton>Войти</MyButton>
			</form>
		</div>
	)
}
export default Login
