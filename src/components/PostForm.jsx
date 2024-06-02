import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ createHandler }) => {
    const [post, setPost] = useState({ title: '', body : '' })

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!post.body || !post.title) return

        createHandler({ ...post, id: Date.now() })
        setPost({ title: '', body: '' })
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
                placeholder="post body"
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <MyButton type="submit">SUBMIT</MyButton>
        </form>
    )
}

export default PostForm
