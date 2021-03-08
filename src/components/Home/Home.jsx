import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    let [posts,setPosts]=useState([]);
    
    useEffect(()=>{
        let url="https://jsonplaceholder.typicode.com/posts";
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    
    return (
        <div>
            <h1>this is home:{posts.length}</h1>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;