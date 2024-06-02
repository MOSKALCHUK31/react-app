import React from 'react'
import Post from "./Post";

const PostsList = ({ title, posts, removeHandler }) => {

    if (!posts.length) {
        return (
            <h2 style={{textAlign: "center"}}>No posts</h2>
        )
    }

    return (
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>{title}</h1>
                {posts.map((p, index) =>
                    <Post
                        title={p.title}
                        description={p.description}
                        number={index + 1}
                        id={p.id}
                        key={p.id}
                        removeHandler={removeHandler}
                    />
                )}
            </div>
        </div>
    )
}

export default PostsList
