import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    let {id,title,body}=props.post;
    let history=useHistory();
    let handleClick=(id)=>{
        history.push(`/post/${id}`);
    }
    const postStyle={
        border:"2px solid gray",
        margin:"5px",
        padding:"10px"
    }
    return (
        <div style={postStyle}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={()=>handleClick(id)}>See Comments</button>
        </div>
    );
};

export default Post;