// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import {useState, useRef} from 'react';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostList from "./components/PostList";



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ]);

  // const [post, setPost] = useState({title: '', body: ''});
  // const [body, setBody] = useState('fddff');

  // const bodyInputRef = useRef();

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
    console.log(post.id)
  }
  
  return (
    <div className="App">
      <PostForm create={createPost}/>
      {/* Условная отрисовка */}
      {posts.length !== 0
        ? <PostList posts={posts} title={'Список постов 1'} remove={removePost}/>
        : <h1 style={{textAlign: 'center'}}>Посты не были найдены!</h1>
      }
    </div>
  );
}

export default App;