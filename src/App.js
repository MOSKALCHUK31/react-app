import React, { useState } from 'react'
import './styles/App.css'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'

function App() {
    const [posts, setPosts] = useState([
        { id: '1', title: 'Javascript', description: 'Programming language' },
        { id: '2', title: 'Python', description: '1 Programming language' },
        { id: '3', title: 'PHP', description: '0 Programming language' }
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const options = [
        { title: 'Sort by title', value: 'title' },
        { title: 'Sort by desc', value: 'description' }
    ]

    function removePost(id) {
        setPosts(posts.filter(p => p.id !== id))
    }

    function createPost(data) {
        setPosts([...posts, data])
    }

    function sortPosts(key) {
        setSelectedSort(key)
        setPosts([...posts.sort((a, b) => a[key].localeCompare(b[key]))])
    }

    return (
        <div className="App">
            <PostForm createHandler={createPost} />
            <hr style={{margin: '15px 0'}}/>
            <MySelect
                defaultValue={'SORT BY => ...'}
                options={options}
                onChange={sortPosts}
                value={selectedSort}
            />
            <PostsList
                title={'MY LIST'}
                posts={posts}
                removeHandler={removePost}
            />
        </div>
    )
}

export default App
