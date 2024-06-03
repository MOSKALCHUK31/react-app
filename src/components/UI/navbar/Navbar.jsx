import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
             <Link className={styles.navbarItem} to="/posts">POSTS</Link>
             <Link className={styles.navbarItem} to="/ABOUT">ABOUT</Link>
         </div>
    )
}

export default Navbar
