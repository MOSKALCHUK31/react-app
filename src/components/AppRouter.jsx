import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { AuthContext } from '../context'

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(r =>
                    <Route path={r.path} element={r.element} key={r.path}/>
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map(r =>
                    <Route path={r.path} element={r.element} key={r.path}/>
                )}
            </Routes>
    )
}

export default AppRouter
