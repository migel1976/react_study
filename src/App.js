import React,{useState, useRef} from 'react'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([
			{id:1, title:'JS1', body:'Desc'},
			{id:2, title:'JS2', body:'Desc'},
			{id:3, title:'JS3', body:'Desc'},
			{id:4, title:'JS4', body:'Desc'},
	])
	const [postsPython, setPostsPython]=useState([
			{id:1, title:'Python 1', body:'Desc'},
			{id:2, title:'Python 2', body:'Desc'},
			{id:3, title:'Python 3', body:'Desc'},
			{id:4, title:'Python 4', body:'Desc'},
	])
	const [title, setTitle]=useState('Title')
	const [desc, setDesc]=useState('Desc')
	const descInputRef=useRef()

	const changeTitle=(e)=>{
		setTitle(e.target.value)
	}

	const changeDesc=(e)=>{
		setDesc(e.target.value)
	}

	const addNewPost=(e)=>{
		e.preventDefault()
		const post={
			id:Date.now(),
			title:title,
			body:descInputRef.current.value
		}
		console.log('post is ', post)
		setPosts([...posts,post])
		// console.log('title is ', title)
		// console.log('desc is ', descInputRef.current.value)
	}
	return(
		<div className='App'>
			<form>
				{/* Управляемый компонент */}
				<MyInput 
								type='text' 
								placeholder='Name post' 
								value={title}
								onChange={changeTitle}
				/>
				{/* <input type='text' ref={descInputRef}/> */}
				{/* Неуправляемый компонент */}
				<MyInput 
								ref={descInputRef}
								type='text' 
								placeholder='Desc post' 
								value={desc}
								onChange={changeDesc}
				/>
				<MyButton 
					onClick={addNewPost}
				>Post</MyButton>
			</form>
			<PostList posts={posts} title='Список постов JS на сегодня'

			/>
			{/* <PostList posts={postsPython} title='Список постов Python на сегодня'/> */}
		</div>
	)
}
