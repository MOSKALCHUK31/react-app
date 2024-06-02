import React, { useMemo, useState } from 'react'
import './styles/App.css'
import { sortSelectOptions } from './utils/sortSelectOptions'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'

function App() {
    const [posts, setPosts] = useState([
        { id: '1', title: 'Javascript', description: 'Programming language 2' },
        { id: '10', title: 'Javascript 1', description: 'Programming language' },
        { id: '2', title: 'Python', description: '1 Programming language' },
        { id: '3', title: 'PHP', description: '0 Programming language' }
    ])
    const [filter, setFilter] = useState({ sort: '', query: '' })

    const sortedPosts = useMemo(() => {
        if (!filter.sort) return posts

        return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }, [filter.sort, posts])

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    const removePost = (id) => setPosts(posts.filter(p => p.id !== id))
    const createPost = (data) => setPosts([...posts, data])

    return (
        <div className="App">
            <PostForm createHandler={createPost} />
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                options={sortSelectOptions}
                filterHandler={setFilter}
            />
            <PostsList
                title={'MY LIST'}
                posts={sortedAndSearchPosts}
                removeHandler={removePost}
            />
        </div>
    )
}

export default App
