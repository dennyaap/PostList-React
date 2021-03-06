import {useState, useRef} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});
  
  function addNewPost(e){
    e.preventDefault();
    // const newPost = {
    //   id: Date.now(),
    //   title: post.title,
    //   body: post.body
    // }
    // setPosts([...posts, {...post, id: Date.now()}]);

    const newPost = {
      ...post, id: Date.now()
    }
    // функция обратного вызова
    create(newPost)
    setPost({title: '', body: ''})
    // console.log(newPost);
    // console.log(bodyInputRef.current.value);
  }
    return (
        <form>
        {/*Управляемый компонент*/}
        <MyInput type="text" placeholder='Название поста' value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/>

        {/*Неуправляемый компонент*/}
        {/* <input ref={bodyInputRef} type="text"/> */}
        {/*Неконтролируемый/неуправляемый компонент*/}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder='Название поста' value={title} onChange={(e) => setTitle(e.target.value)}/> */}
        <MyInput type="text" placeholder='Описание поста' value={post.body} onChange={(e) => setPost({...post, body: e.target.value})}/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    )
}
export default PostForm;