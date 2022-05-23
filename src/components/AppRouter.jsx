import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPage from '../pages/PostPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/posts/:id" element={<PostPage />}/>
            <Route path="/error" element={<Error />}/>
            <Route path="/" element={<Navigate to="/error" />}/>
        </Routes>
    );
}

export default AppRouter;
