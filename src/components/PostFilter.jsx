import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter=({filter, setFilter})=>{
	return(
		<div>
			<MyInput
				placeholder='Поиск...'
				value={filter.query}
				onChange={e=>setFilter({...filter,query:e.target.value})}
			/>
			<hr style={{margin:'15px 0'}} />
			<MySelect 
				value={filter.sort}
				// onChange={sortPosts}
				onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
				defaultValue='Сортировка' 
				options={[
					{value:'title', name:'По заголовку'},
					{value:'body', name:'По тексту'},
				]}
			/>
		</div>
	)
}
export default PostFilter
