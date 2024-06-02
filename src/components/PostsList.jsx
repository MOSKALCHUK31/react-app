import React from 'react'
import Post from './Post'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const PostsList = ({ title, posts, removeHandler }) => {

    if (!posts.length) {
        return (
            <h2 style={{textAlign: "center"}}>No posts</h2>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup className="post-list">
                {posts.map((p, index) =>
                    <CSSTransition
                        key={p.id}
                        timeout={500}
                        classNames="post-item"
                    >
                        <Post
                            title={p.title}
                            body={p.body}
                            number={index + 1}
                            id={p.id}
                            removeHandler={removeHandler}
                        />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default PostsList
