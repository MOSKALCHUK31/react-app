import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Post from './pages/Post'
import Error from './pages/Error'
import Navbar from './components/UI/navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:id" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
