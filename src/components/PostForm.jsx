import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ createHandler }) => {
    const [post, setPost] = useState({ title: '', description : '' })

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!post.description || !post.title) return

        createHandler({ ...post, id: Date.now() })
        setPost({ title: '', description: '' })
    }

    return (
        <form onSubmit={handleSubmit}>
            <MyInput
                type="text"
                placeholder="post title"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="post description"
                value={post.description}
                onChange={(e) => setPost({...post, description: e.target.value})}
            />
            <MyButton type="submit">SUBMIT</MyButton>
        </form>
    )
}

export default PostForm
