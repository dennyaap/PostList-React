import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import { useFetching } from "../hooks/useFetching";
const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching( async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });


    useEffect( () => {
        fetchPostById();
        fetchComments();
    }, [params]);

    return (
        <div>
            <h1>Вы открыли страницу поста</h1>
            {
                isLoading
                ? <Loader />
                : <div>{post.id} . {post.title}</div>
            }
            <h1>Комментарии</h1>
            {
                isCommentsLoading
                ? <Loader />
                : 
                <div className='post__comments'>
                    {comments.map(comment =>
                        <div style={{marginTop: 15}} key={comment.id}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
export default PostPage;