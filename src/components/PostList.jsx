import PostItem from "./PostItem";
const PostList = ({posts, title, remove}) => {
    return (
    <div className="post__list">
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {posts.map((post, index) =>
            <PostItem remove={remove} number={index} post={ post } key={post.id}/>
        )}
    </div>
    );
}
export default PostList;