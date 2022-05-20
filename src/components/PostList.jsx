import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";
const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return (
            <h1 style={{textAlign: 'center'}}>Посты не были найдены!</h1>
        )
    }
    return (
    <div className="post__list">
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <TransitionGroup>
            {posts.map((post, index) =>
                <CSSTransition key={post.id} timeout={500} classNames="post">
                    <PostItem remove={remove} number={index} post={ post }/>
                </CSSTransition>
            )}
        </TransitionGroup>
    </div>
    );
}
export default PostList;