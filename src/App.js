// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import {useState, useRef} from 'react';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostList from "./components/PostList";
import MySelect from './components/UI/select/MySelect';



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'rr', body: 'бб'},
    {id: 2, title: 'aa', body: 'аа'},
    {id: 3, title: 'bb', body: 'яя'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

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
  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))) //мутируем копию массива и сортируем его. Так как на прямую нельзя сортировать массив.
    console.log(sort);
  }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MySelect value={selectedSort} onChange={sortPosts} defaultValue='Сортировка' options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'}

        ]}/>
      </div>
      {/* Условная отрисовка */}
      {posts.length !== 0
        ? <PostList posts={posts} title={'Список постов 1'} remove={removePost}/>
        : <h1 style={{textAlign: 'center'}}>Посты не были найдены!</h1>
      }
    </div>
  );
}

export default App;