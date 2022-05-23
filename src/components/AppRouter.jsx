import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);
    console.log(isAuth);
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
