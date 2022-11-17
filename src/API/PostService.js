import axios from "axios";

class PostService{
	static async getAll(limit=10, page=1){
		const response=await axios.get('https://jsonplaceholder.typicode.com/posts', {params:{_limit:limit, _page:page}})
			// return response.data
			return response
	}

	static async getById(id){
	  console.log('PostService is ', id)	
		const response=await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
			// return response.data
			return response
	}
}
export default PostService
