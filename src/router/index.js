import { Navigate } from 'react-router-dom'
import Posts from '../pages/Posts'
import Post from '../pages/Post'
import About from '../pages/About'
import Auth from '../pages/Auth'

export const privateRoutes = [
    { path: '/posts', element: <Posts /> },
    { path: '/posts/:postId', element: <Post /> },
    { path: '/about', element: <About /> },
    { path: '*', element: <Navigate to="/posts" /> }
]

export const publicRoutes = [
    { path: '/auth', element: <Auth /> },
    { path: '*', element: <Navigate to="/auth" /> }
]
