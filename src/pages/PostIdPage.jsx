import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useFetching} from '../hooks/useFetching'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'

const PostIdPage =()=>{
	const params=useParams()
	const [post, setPost]=useState({})
	const [comments, setComments]=useState([])
	const [fetchPostsById, isLoading, error]=useFetching(async ()=>{
		const response=await PostService.getById(params.id)
		setPost(response.data)
	})
	const [fetchComment, isCommentLoading, commentError]=useFetching(async ()=>{
		const response=await PostService.getCommentsByPostId(params.id)
		setComments(response.data)
	})
	// const [fetchPostsById, isLoading, error]=useFetching(async (id)=>{
	// 	console.log('useFetching id ', id)
	// 	const response=await PostService.getById(id)
	// 	setPost(response.data)
	// })

	useEffect(()=>{
		console.log('useEffect id ', params.id)
		fetchPostsById(params.id)
		fetchComment(params.id)
	},[])

	console.log('params is ', params)

	return (
		<div>
			<h1>
			{isLoading
				? <MyLoader />
				: <div>{post.id} {post.title}</div>
			}
			</h1>
			<h1>Комментарий</h1>
			<h1>
				{isCommentLoading
					? <MyLoader />
					: <div>
						{comments.map(comm=>
						<div style={{marginTop:15}}>
							<h5>{comm.email}</h5>
							<h6 style={{color:'red'}}>{comm.body}</h6>
						</div>
						)}
					</div>
				}
			</h1>
		</div>
	)
}
export default PostIdPage
