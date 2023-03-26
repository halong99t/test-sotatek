import React from 'react'
import './styles.scss'

interface ResizeInputProps {
    id: string
    name: string
    value: string
    onChange: (e: any) => void
}

function ResizeInput(props: ResizeInputProps) {
    const { id, name, value, onChange } = props

    return (
        <div className="resize-text-container">
            <div className="resize-text-title">Description</div>
            <textarea
                className="resize-text"
                id={id}
                name={name}
                value={value}
                placeholder="description ..."
                onChange={onChange}
            />
        </div>
    )
}

export default ResizeInput
