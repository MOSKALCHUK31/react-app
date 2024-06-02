import React, { useState, useEffect } from 'react'
import './styles/App.css'
import { sortSelectOptions } from './utils/sortSelectOptions'
import { PostsService } from './api/PostsService'
import { usePosts } from './hooks/usePosts'
import { useFetching } from './hooks/useFetching'
import { usePagination } from './hooks/usePagination'
import PostsList from './components/PostsList'
import PostForm from './components/PostForm'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import MyButton from './components/UI/button/MyButton'
import MyLoader from './components/UI/loader/MyLoader'
import Pagination from './components/UI/pagination/Pagination'

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalCount, setTotalCount] = useState(0)

    const { page, paginationArr, setPage } = usePagination(totalCount, 10)
    const sortedAndSearchPosts = usePosts(filter.query, filter.sort, posts)
    const [fetchPosts, isPostsLoading, postsError] = useFetching( async (...args) => {
        const { data, headers } = await PostsService.getAll(...args)
        setPosts(data)
        setTotalCount(+headers['x-total-count'])
    })

    const removePost = (id) => setPosts(posts.filter(p => p.id !== id))
    const createPost = (data) => {
        setPosts([...posts, data])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts(page)
    }, [page])

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
            {isPostsLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
                    <MyLoader />
                </div>
                : <PostsList
                    title={'MY LIST'}
                    posts={sortedAndSearchPosts}
                    removeHandler={removePost}
                />
            }
            {postsError &&
                <h1 style={{textAlign: 'center'}}>{postsError}</h1>
            }
            <div style={{marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '4px'}}>
                <Pagination
                    paginationArr={paginationArr}
                    page={page}
                    setPage={setPage}
                />
            </div>
        </div>
    )
}

export default App
