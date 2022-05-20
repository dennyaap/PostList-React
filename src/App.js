// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
import {useState, useRef, useMemo} from 'react';
import './styles/App.css';
import PostForm from './components/PostForm';
import PostList from "./components/PostList";
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'rr', body: 'бб'},
    {id: 2, title: 'aa', body: 'аа'},
    {id: 3, title: 'bb', body: 'яя'},
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});

  const [modal, setModal] = useState(false);
  // const [selectedSort, setSelectedSort] = useState('');
  // const [searchQuery, setSearchQuery] = useState('');

  // const [post, setPost] = useState({title: '', body: ''});
  // const [body, setBody] = useState('fddff');

  // const bodyInputRef = useRef();

  // function getSortedPosts(){
  //   console.log('Отработала функция');
  //   if(selectedSort){
  //     return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
  //   } 
  //   return posts;
  // }

  const sortedPosts = useMemo(() => {
    console.log('Отработала функция');
    if(filter.sort){
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } 
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts]) //массив зависимостей. будем реагировать только на изменение этих зависимостей

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
    console.log(post.id)
  }
  // const sortPosts = (sort) => {
  //   setSelectedSort(sort);
  //   // setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))) //мутируем копию массива и сортируем его. Так как на прямую нельзя сортировать массив.
  //   console.log(sort);
  // }
  return (
    <div className="App">
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