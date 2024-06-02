import React from 'react'
import MyButton from "../button/MyButton";

const Pagination = ({ paginationArr, page, setPage }) => {
    return (
        <div>
            {paginationArr.map(el =>
                <MyButton
                    style={el === page ? {backgroundColor: 'yellowgreen'} : {}}
                    key={el}
                    onClick={() => setPage(el)}
                >{el}</MyButton>
            )}
        </div>
    )
}

export default Pagination
