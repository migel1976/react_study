import {useMemo} from 'react'

export const useSortedPosts=(posts, sort)=>{
	const sortedPosts=useMemo(()=>{
		if(sort){
			return [...posts].sort((a,b)=>a[sort].localeCompare(b[sort]))
		}
		return posts
	},[sort,posts])

	return sortedPosts
}


export const usePosts=(posts, sort, query)=>{
	const sortedPosts=useSortedPosts(posts, sort)
	
	const sortedAndSearchedPosts=useMemo(()=>{
	  const filtered = sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
		return filtered
	},[sortedPosts, query])

	return sortedAndSearchedPosts
}

