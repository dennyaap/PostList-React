import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { routes } from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="/about" element={<About />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/posts/:id" element={<PostPage />}/>
            <Route path="/error" element={<Error />}/> */}
            {routes.map(route => 
                <Route path={route.path} element={route.component} />
            )}
            <Route path="/" element={<Navigate to="/posts" />}/>
        </Routes>
    );
}

export default AppRouter;
