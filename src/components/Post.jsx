import React from 'react'

const Post = ({ removeHandler, ...props }) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.title}</strong>
                <div>{props.description}</div>
            </div>
            <div className="post__btns">
                <button onClick={() => removeHandler(props.id)}>REMOVE</button>
            </div>
        </div>
    )
}

export default Post
