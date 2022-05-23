import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoadingAuth} = useContext(AuthContext);
    console.log(isAuth);

    if(isLoadingAuth) {
        return <Loader />
    }
    return isAuth ? (
        <Routes>
            {privateRoutes.map(route => 
                <Route key={route.path} path={route.path} element={route.component} />
            )}
            <Route path="*" element={<Navigate to="/posts" />}/>
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(route => 
                <Route key={route.path} path={route.path} element={route.component} />
            )}
            <Route path="*" element={<Navigate to="/login" />}/>
        </Routes>
    );
}

export default AppRouter;
