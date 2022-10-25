import axios from "axios";

class PostService{
	static async getAll(){
		try{
			const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
			return response.data
		}catch(e){
			console.log('error ', e)
		}
	}
}
export default PostService
