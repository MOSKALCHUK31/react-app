import React from 'react'
import Post from "./Post";

const PostsList = ({ title, posts, removeHandler }) => {

    return (
        <div>
            {posts.length
                ?
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
                :
                <h2 style={{textAlign: "center"}}>No posts</h2>
            }
        </div>
    )
}

export default PostsList
