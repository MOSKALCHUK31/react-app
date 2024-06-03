import Posts from '../pages/Posts'
import Post from '../pages/Post'
import About from '../pages/About'
import Error from '../pages/Error'

export const routes = [
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:postId', element: <Post /> },
    { path: '/about', element: <About /> },
    { path: '/*', element: <Error /> },
]
