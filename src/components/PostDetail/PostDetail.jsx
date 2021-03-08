import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SingleComment from '../SingleComment/SingleComment';

const PostDetail = () => {
    let {postId}=useParams();
    let [comments,setComments]=useState([]);
    useEffect(()=>{
        let url=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[postId])
    
    return (
        <div>
            <h3>Comments:{comments.length}</h3>
            {
                comments.map(comment=><SingleComment comment={comment}></SingleComment>)
            }
        </div>
    );
};

export default PostDetail;