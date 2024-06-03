import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

const PostItem = ({ removeHandler, ...props }) => {
    const navigate = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.title}</strong>
                <div>{props.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => removeHandler(props.id)}>REMOVE</MyButton>
                <MyButton onClick={() => navigate(`/posts/${ props.id }`)}>TO POST</MyButton>
            </div>
        </div>
    )
}

export default PostItem
