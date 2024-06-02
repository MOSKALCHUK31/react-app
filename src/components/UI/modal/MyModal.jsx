import React from 'react'
import style from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
    const modalClasses = [
        style.modal,
        visible ? style.active : ''
    ].join(' ')

    return (
        <div className={modalClasses} onClick={setVisible}>
            <div
                className={style.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default MyModal
