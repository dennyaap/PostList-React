import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
    }
    return (
        <div>
            <h1>Страница авторизации</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Логин'/>
                <MyInput type="password" placeholder='Пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
}

export default Login;
