import React from 'react';

const SingleComment = (props) => {
    let {name,email,body}=props.comment;
    return (
        <div style={{border:"1px solid goldenrod",margin:"5px 150px"}}>
            <h4>Name :{name}</h4>
            <p>Email :{email}</p>
            <p>Comment :{body}</p>
        </div>
    );
};

export default SingleComment;