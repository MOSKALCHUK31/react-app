import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Auth = () => {
    const { setIsAuth } = useContext(AuthContext)

    function handleSubmit(e) {
        e.preventDefault()

        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', marginBottom: '15px'}}>AUTH</h1>
            <form onSubmit={handleSubmit}>
                <MyInput type="text" placeholder="EMAIL"/>
                <MyInput type="password" placeholder="PASSWORD"/>
                <MyButton type="submit">SUBMIT</MyButton>
            </form>
        </div>
    )
}

export default Auth
