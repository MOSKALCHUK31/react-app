import React, { useState, useEffect } from 'react'
import './styles/App.css'
import { sortSelectOptions } from './utils/sortSelectOptions'
import { PostsService } from './api/PostsService'
import { usePosts } from './hooks/usePosts'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchPosts = usePosts(filter.query, filter.sort, posts)

    const removePost = (id) => setPosts(posts.filter(p => p.id !== id))
    const createPost = (data) => {
        setPosts([...posts, data])
        setModal(false)
    }
    const fetchData = async () =>  {
        const { data } = await new PostsService().getAll()
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="App">
            <MyButton
                type="button"
                onClick={() => setModal(true)}
            >CREATE POST</MyButton>
            <MyModal visible={modal} setVisible={() => setModal(false)}>
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
