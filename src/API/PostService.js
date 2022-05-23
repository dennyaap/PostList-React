import axios from 'axios';
export default class PostService{
    static async getAll(limit = 10, page = 1){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }
    static async getById(post_id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + post_id);
        return response;
    }
    static async getCommentsByPostId(post_id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`);
        return response;
    }
}