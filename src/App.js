import React, { useState } from 'react'
import './styles/App.css'
import Post from './components/Post'

function App() {
    const [posts, setPosts] = useState([
        { id: '1', title: 'Javascript', description: 'Programming language' },
        { id: '2', title: 'Python', description: 'Programming language' },
        { id: '3', title: 'PHP', description: 'Programming language' }
    ])

    function clickHandler(id) {
        setPosts([...posts.filter(p => p.id !== id)])
    }

    return (
        <div className="App">
            {posts.map(p =>
                <Post
                    title={p.title}
                    description={p.description}
                    key={p.id}
                    handleClick={() => clickHandler(p.id)}
                />
            )}
        </div>
    )
}

export default App
