import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    return (
        <div>
            <h1>Страница авторизации</h1>
            <form>
                <MyInput type="text" placeholder='Логин'/>
                <MyInput type="password" placeholder='Пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
}

export default Login;
