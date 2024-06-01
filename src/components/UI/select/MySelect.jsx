import React from 'react'

const MySelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled value="">{ defaultValue }</option>
            {options.map(({ title, value }) =>
                <option value={value} key={value}>
                    {title}
                </option>
            )}
        </select>
    )
}

export default MySelect
