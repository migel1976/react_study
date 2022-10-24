import React,{useState, useRef} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([
			{id:1, title:'Aloha', body:'Kiter'},
			{id:2, title:'Hello', body:'MonoWheels'},
			{id:3, title:'bee', body:'fdls'},
	])
	const [selectedSort,setSelectedSort]=useState()

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
	}

	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id !== post.id))
	}

	const sortPosts=(sort)=>{
		console.log('App sortPosts is ', sort)
		setSelectedSort(sort)
		setPosts([...posts].sort((a,b)=>a[sort].localeCompare(b[sort])))
	}

	return(
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin:'15px 0'}} />
			<MySelect 
				value={selectedSort}
				onChange={sortPosts}
				defaultValue='Сортировка' 
				options={[
					{value:'title', name:'По заголовку'},
					{value:'body', name:'По тексту'},
				]}
			/>

			{/* Условная отрисовка */}
			{posts.length > 0
				? <PostList remove={removePost} posts={posts} title='Список постов JS на сегодня' />
				: <h1 style={{textAlign:'center'}}>Посты не найдены!!!</h1>
					}
		</div>
	)
}
