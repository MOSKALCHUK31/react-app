import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter'
import Navbar from './components/UI/navbar/Navbar'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
