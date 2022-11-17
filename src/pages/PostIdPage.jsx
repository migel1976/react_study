import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useFetching} from '../hooks/useFetching'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'

const PostIdPage =()=>{
	const params=useParams()
	const [post, setPost]=useState({})
	const [fetchPostsById, isLoading, error]=useFetching(async ()=>{
		const response=await PostService.getById(params.id)
		setPost(response.data)
	})
	// const [fetchPostsById, isLoading, error]=useFetching(async (id)=>{
	// 	console.log('useFetching id ', id)
	// 	const response=await PostService.getById(id)
	// 	setPost(response.data)
	// })

	useEffect(()=>{
		console.log('useEffect id ', params.id)
		fetchPostsById(params.id)
	},[])

	console.log('params is ', params)

	return (
		<div>
			Aloha, you are on new page 
			{isLoading
				? <MyLoader />
				: <div>{post.id} {post.title}</div>
			}
		</div>
	)
}
export default PostIdPage
