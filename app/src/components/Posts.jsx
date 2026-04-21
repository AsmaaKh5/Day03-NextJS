"use client"
import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts,setPosts] = useState([])
    async function fetchPosts() {
        
    }
    useEffect(()=>{
          fetchPosts()
    },[])
    return (
        <div>
            <h1>Posts</h1>
        </div>
    );
};

export default Posts;