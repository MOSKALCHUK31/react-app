import React from 'react'
import style from './MyButton.module.css'

const MyButton = ({ children, ...props }) => {
    return (
        <button {...props} className={style.button}>
            {children}
        </button>
    )
}

export default MyButton
