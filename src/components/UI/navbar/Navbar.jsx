import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'

const Navbar = ({ isAuth, setIsAuth }) => {
    function onLogout() {
        localStorage.removeItem('auth')
        setIsAuth(false)
    }

    return (
        <div className={styles.navbar}>
            { isAuth
                ?
                <div>
                    <MyButton onClick={onLogout}>LOGOUT</MyButton>
                </div>
                : ''
            }
            <div>
                <Link className={styles.navbarItem} to="/posts">POSTS</Link>
                <Link className={styles.navbarItem} to="/about">ABOUT</Link>
            </div>
        </div>
    )
}

export default Navbar
