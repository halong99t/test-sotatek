import React from 'react'
import './styles.scss'

interface InputProps {
    value: string
    id: string
    name: string
    placeholder: string
    onChange: (e: any) => void
}

function Input(props: InputProps) {
    const { value, id, name, placeholder, onChange } = props
    return (
        <input
            className="input-style"
            value={value}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input
