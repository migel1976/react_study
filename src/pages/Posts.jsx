import React,{useState, useEffect} from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostFilter from '../components/PostFilter'
import MyModal from '../components/UI/modal/MyModal'
import MyButton from '../components/UI/button/MyButton'
import {usePosts} from '../hooks/usePosts'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'
import {useFetching} from '../hooks/useFetching'
import {getPageCount, getPagesArray} from '../utils/pages'
import MyPagination from '../components/UI/pagination/MyPagination'
import '../style/App.css'

function Posts(){
	const [posts, setPosts]=useState([])
	const [filter, setFilter]=useState({sort:'', query:''})
	const [modal, setModal]=useState(false)
	const [totalPages, setTotalPages]=useState(0)
	const [limit, setLimit]=useState(5)
	const [page, setPage]=useState(1)
	const sortedAndSearchedPosts=usePosts(posts,filter.sort,filter.query)

	// let pagesArray=getPagesArray(totalPages)

	const [fetchPosts, isPostsLoading, postError]=useFetching(async ()=>{
			const response = await PostService.getAll(limit, page)
			setPosts(response.data)
			const totalCount=response.headers['x-total-count']
			console.log('totalCount ', totalCount)
			setTotalPages(getPageCount(totalCount, limit))
	})

	useEffect(()=>{
		console.log('useEffect in action Mount Component')
		fetchPosts()
	},[page])

	const createPost=(newPost)=>{
		setPosts([...posts,newPost])
		setModal(false)
	}

	const removePost=(post)=>{
		setPosts(posts.filter(p=>p.id !== post.id))
	}

	console.log('totalPages',totalPages)
	const changePage=(page)=>{
		setPage(page)
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
			{postError && <h1>Произошла ошибка " {postError} "</h1>}
			{isPostsLoading
				// ? <h1 style={{textAlign:'center'}}>идет загрузка...</h1>
					? <div style={{display:'flex', justifyContent:'center'}}>
							<MyLoader />
						</div>
					: <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов JS на сегодня' />
			}
			<MyPagination page={page} totalPages={totalPages} changePage={changePage} />
		</div>
	)
}
export default Posts
