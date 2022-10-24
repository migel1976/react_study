import React,{useState, useRef, useMemo} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import MyInput from './components/UI/input/MyInput'

import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([
			{id:1, title:'Aloha', body:'Kiter'},
			{id:2, title:'bee', body:'fdls'},
			{id:3, title:'jdj', body:'hfoiew'},
	])
	const [selectedSort,setSelectedSort]=useState()
	const [searchQuery, setSearchQuery]=useState('')

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
	}

	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id !== post.id))
	}

	const sortPosts=(sort)=>{
		console.log('App sortPosts is ', sort)
		setSelectedSort(sort)
	}

	// непправильное использование сортировки
	// const getSortedPosts=()=>{
	// 	console.log('getSortedPosts')
	// 	if(selectedSort){
	// 		return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
	// 	}
	// 	return posts
	// }

	// const sortedPosts=getSortedPosts()

	const sortedPosts=useMemo(()=>{
		console.log('sortedPosts')
		if(selectedSort){
			return [...posts].sort((a,b)=>a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	},[selectedSort,posts])

	const sortedAndSearchedPosts=useMemo(()=>{
		console.log('sortedAndSearchedPosts')
		console.log('sortedAndSearchedPosts posts', posts)
		// return sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
	  const filtered = sortedPosts.filter(post=>post.title.toLowerCase().includes(searchQuery.toLowerCase()))
		console.log('sortedAndSearchedPosts filtered posts', filtered)
		return filtered
	},[sortedPosts, searchQuery])

	return(
		<div className='App'>
			<PostForm create={createPost} />
			<hr style={{margin:'15px 0'}} />
			<MyInput
				placeholder='Поиск...'
				value={searchQuery}
				onChange={e=>setSearchQuery(e.target.value)}
			/>
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
			{sortedAndSearchedPosts.length > 0
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS на сегодня' />
				: <h1 style={{textAlign:'center'}}>Посты не найдены!!!</h1>
					}
		</div>
	)
}
