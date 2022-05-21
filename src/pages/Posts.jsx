import {useState, useRef, useMemo, useEffect} from 'react';
import '../styles/App.css';
import PostForm from '../components/PostForm';
import PostList from "../components/PostList";
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages.js';
import Pagination from '../components/UI/pagination/Pagination';



function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  // const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })
  useEffect(() => {
    fetchPosts();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
    // fetchPosts();
  }

  const createPost = (newPost) =>{
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
    console.log(post.id)
  }

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
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
      : <PostList posts={sortedAndSearchedPosts} title={'Список постов 1'} remove={removePost}/>
      }
      <Pagination pages={page} changePage={changePage} totalPages={totalPages}/>
    </div>
  );
}

export default Posts;