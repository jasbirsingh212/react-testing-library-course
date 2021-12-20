import React from 'react'

const CustomInput = ({label, value, onChange}) => {
    return (
        <div>
            <label htmlFor={label} aria-label={label}>{label}</label>
            <input type="text" name="test" value={value}  onChange={onChange} />
        </div>
    )
}

export default CustomInput
