"use client";
import { useState } from 'react';

import Title from '../Header/Header';
import Line from '../Line/Line';

const List = () => {
    const [posts, setPosts] = useState([
        { id: Math.random(), funcaoUtilizada: "Add", desc: "Deu ruim!", dataHora: '21/07/2024 21:00' },
        { id: Math.random(), funcaoUtilizada: "Del", desc: "Deu certo!", dataHora: '21/07/2024 21:10' },
        { id: Math.random(), funcaoUtilizada: "List", desc: "Listou!", dataHora: '21/07/2024 21:20' }
    ]);

    function handleRefresh() {
        setTimeout(() => {
            setPosts((prevState) => [
                ...prevState,
                {
                    id: Math.random(),
                    funcaoUtilizada: `Add 0${posts.length + 1}`,
                    desc: `Erro 0${posts.length + 1}`,
                    dataHora: '21/07/2024 21:20'
                }])
        }, 2000)
    }

    return (
        <>
            <Title site={{
                title: "Lista de logs",
                // subtitle: "sem precisar:"
            }} />

            <button onClick={handleRefresh}>Atualizar</button>
            <hr />

            {posts.map(post => (
                <Line
                    key={post.id}
                    id={post.id}
                    funcaoUtilizada={post.funcaoUtilizada}
                    desc={post.desc}
                    dataHora={post.dataHora}
                />
            ))}
        </>
    );
};

export default List;
