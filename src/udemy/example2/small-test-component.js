import React, { useState } from 'react';
import CustomInput from './CustomInput';

const Input = ( ) => {
    const [ text, setText ] = useState("");

    const onChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    return (
        <div>
            <CustomInput value={text} onChange={onChange} label='test'  />
            <p> your entered text: {text}</p>
        </div>
    )
}

export default Input;
