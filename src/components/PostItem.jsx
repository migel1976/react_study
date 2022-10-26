import React from 'react'

const PostItem=(props)=>{
	const remove=()=>{
		props.remove(props.post)
	}
	return(
			<div className='post'>
				<div className='post__content'>
				{/* <strong>{props.post.id} - {props.post.title}</strong> */}
				<strong>{props.post.id} - {props.post.title}</strong>
					<div>
						{props.post.body}
					</div>
				</div>
				<div className='post__btns'>
				{/* <div className='post'> */}
					<button
						onClick={remove}
					>Delete</button>
				</div>
			</div>
	)
}
export default PostItem
