import React,{useState, useRef, useMemo} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
// import MySelect from './components/UI/select/MySelect'
// import MyInput from './components/UI/input/MyInput'

import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([
			{id:1, title:'Aloha', body:'Kiter'},
			{id:2, title:'bee', body:'fdls'},
			{id:3, title:'jdj', body:'hfoiew'},
	])
	const [filter, setFilter]=useState({sort:'', query:''})
	const [modal, setModal]=useState(false)
	// const [selectedSort,setSelectedSort]=useState()
	// const [searchQuery, setSearchQuery]=useState('')

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
		setModal(false)
	}

	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id !== post.id))
	}

	// const sortPosts=(sort)=>{
	// 	console.log('App sortPosts is ', sort)
	// 	setSelectedSort(sort)
	// }

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
		if(filter.sort){
			return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	},[filter.sort,posts])

	const sortedAndSearchedPosts=useMemo(()=>{
	  const filtered = sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
		console.log('sortedAndSearchedPosts filtered posts', filtered)
		return filtered
	},[sortedPosts, filter.query])

	return(
		<div className='App'>
			<MyButton
				style={{marginTop:'30px'}}
				onClick={()=>setModal(true)}
			>
				Создать пользователя	
			</MyButton>
			<MyModal
				visible={modal}
				setVisible={setModal}
			>
				<PostForm create={createPost} />
			</MyModal>
			<hr style={{margin:'15px 0'}} />
			<PostFilter 
				filter={filter}
				setFilter={setFilter}
			/>

			{/* Условная отрисовка */}
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS на сегодня' />
		</div>
	)
}
