import React,{useState, useRef} from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm=({create})=>{
			const descInputRef=useRef()
			const [post,setPost]=useState({title:'',body:''})
			const changeTitle=(e)=>{
				setPost({...post, title:e.target.value})
			}

			const changeBody=(e)=>{
				setPost({...post, body:e.target.value})
			}
			const addNewPost=(e)=>{
				e.preventDefault()
				const newPost={
					...post,id:Date.now()}
				create(newPost)
				setPost({title:'',body:''})
			}
			return(
				<form>
					{/* Управляемый компонент */}
					<MyInput 
									type='text' 
									placeholder='Name post' 
									value={post.title}
									onChange={changeTitle}
					/>
					{/* Неуправляемый компонент */}
					<MyInput 
									ref={descInputRef}
									type='text' 
									placeholder='Desc post' 
									value={post.body}
									onChange={changeBody}
					/>
					<MyButton 
						onClick={addNewPost}
					>Post</MyButton>
				</form>
			)
}
export default PostForm
