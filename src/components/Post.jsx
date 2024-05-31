import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.title}</strong>
                <div>{props.description}</div>
            </div>
            <div className="post__btns">
                <button onClick={props.handleClick}>REMOVE</button>
            </div>
        </div>
    )
}

export default Post
