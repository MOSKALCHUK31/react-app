import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({ filter, options, filterHandler }) => {
    return (
        <div>
            <MyInput
                type="text"
                placeholder={'SEARCH => ...'}
                value={filter.query}
                onChange={(e) => filterHandler({ ...filter, query: e.target.value })}
            />
            <MySelect
                defaultValue={'SORT BY => ...'}
                options={options}
                value={filter.sort}
                onChange={(sort) => filterHandler({ ...filter, sort })}
            />
        </div>
    )
}

export default PostFilter
