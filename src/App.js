import React,{useState, useEffect} from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService'
import './style/App.css'

export function App(){
	const [posts, setPosts]=useState([])
	const [filter, setFilter]=useState({sort:'', query:''})
	const [modal, setModal]=useState(false)
	const sortedAndSearchedPosts=usePosts(posts,filter.sort,filter.query)
	const [isPostsLoading, setIsPostsLoading]=useState(false)

	useEffect(()=>{
		console.log('useEffect in action Mount Component')
		fetchPosts()
	},[])

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
		setModal(false)
	}

	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id !== post.id))
	}

	async function fetchPosts(){
		setIsPostsLoading(true)
		setTimeout(async()=>{
			const posts = await PostService.getAll()
			setPosts(posts)
			setIsPostsLoading(false)
		},1000)
	}

	return(
		<div className='App'>
			<button
				onClick={fetchPosts}
			>
				get posts from internet
			</button>
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
			{isPostsLoading
				? <h1 style={{textAlign:'center'}}>идет загрузка...</h1>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS на сегодня' />
			}


		</div>
	)
}
