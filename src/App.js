import React,{useState, useRef} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'

import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([
			// {id:1, title:'JS1', body:'Desc'},
	])

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
	}

	return(
		<div className='App'>
			<PostForm create={createPost} />
			<PostList posts={posts} title='Список постов JS на сегодня' />
		</div>
	)
}
