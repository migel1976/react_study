import React from 'react'
import PostItem from './PostItem'

const PostList=({posts, title})=>{
	// const [posts]=props
	return(
		<div>
			<h1 style={{textAlign:'center'}}>
				{title}
			</h1>
			{/* <PostItem number={index+1} post={post} key={post.id} /> */}
			{/* console.log('index',index) */}
			{posts.map((post,index)=>
							<PostItem number={index+1} post={post} key={post.id} /> 
				)
			}
		</div>
	)
}
export default PostList
