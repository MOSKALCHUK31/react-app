import MyLoader from '../components/UI/loader/MyLoader'

import { useState, useEffect } from 'react'
import { PostsService } from '../api/PostsService'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'

const Post = () => {
    const [postData, setPostData] = useState({})
    const [comments, setComments] = useState([])
    const { postId } = useParams()
    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const { data } = await PostsService.getPostById(postId)
        setPostData(data)
    })
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(async () => {
        const { data } = await PostsService.getPostComments(postId)
        setComments(data)
    })

    useEffect(() => {
        fetchPost()
        fetchComments()
    }, [])

    return (
        <div>
            <h1>POST PAGE WITH ID = {postId}</h1>
            { isPostLoading && <MyLoader /> }
            { postError && <h1>{postError}</h1> }
            { !postError && !isPostLoading &&
                <div>
                    <div>TITLE = {postData.title}</div>
                    <div>BODY = {postData.body}</div>
                </div>
            }
            <h2>POST COMMENTS</h2>
            { isCommentsLoading && <MyLoader /> }
            { commentsError && <h1>{commentsError}</h1> }
            { !commentsError && !isCommentsLoading &&
                comments.map(c =>
                    <div key={c.id} style={{border: 'solid', marginBottom: '15px', padding: '15px'}}>
                        <div>COMMENT NAME = {c.name}</div>
                        <div>COMMENT BODY = {c.body}</div>
                    </div>
                )
            }
        </div>
    )
}

export default Post
