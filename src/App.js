// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import {useState, useRef, useMemo, useEffect} from 'react';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostList from "./components/PostList";
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';



function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
    console.log(post.id)
  }

  async function fetchPosts(){
    const posts = await PostService.getAll();
    setPosts(posts);
  }

  return (
    <div className="App">
      <button onClick={fetchPosts}>GET posts</button>
      <MyButton style={{marginTop: '30px'}}onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {/* Условная отрисовка */}
        <PostList posts={sortedAndSearchedPosts} title={'Список постов 1'} remove={removePost}/>
    </div>
  );
}

export default App;