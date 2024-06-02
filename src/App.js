import React, { useState } from 'react'
import './styles/App.css'
import { sortSelectOptions } from './utils/sortSelectOptions'
import { defaultPosts } from './utils/mock'
import { usePosts } from './hooks/usePosts'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {
    const [posts, setPosts] = useState(defaultPosts)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [visible, setVisible] = useState(false)
    const sortedAndSearchPosts = usePosts(filter.query, filter.sort, posts)

    const removePost = (id) => setPosts(posts.filter(p => p.id !== id))
    const createPost = (data) => {
        setPosts([...posts, data])
        setVisible(false)
    }

    return (
        <div className="App">
            <MyButton
                type="button"
                onClick={() => setVisible(true)}
            >CREATE POST</MyButton>
            <MyModal visible={visible} setVisible={() => setVisible(false)}>
                <PostForm createHandler={createPost}/>
            </MyModal>
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
