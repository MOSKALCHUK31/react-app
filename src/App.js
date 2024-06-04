import { BrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthContext } from './context'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import MyLoader from './components/UI/loader/MyLoader'

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    function onLogout() {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }

    useEffect(() => {
        const auth = localStorage.getItem('auth')

        if (auth) {
            setIsAuth(true)
        }

        setIsLoaded(true)
    }, [])

    if (!isLoaded) {
        return (
            <MyLoader />
        )
    }

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            <BrowserRouter>
                <Navbar isAuth={isAuth} onClick={onLogout}/>
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
