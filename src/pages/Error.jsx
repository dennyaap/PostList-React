import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1 style={{color: 'red'}}>
                Вы перешли на несуществующую страницу! <Link to="/posts" style={{textDecoration: 'none', color: 'teal'}}>Назад</Link>
            </h1>
        </div>
    );
}

export default Error;
