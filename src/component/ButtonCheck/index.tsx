import React from 'react'
import './styles.scss'

interface ButtonCheckProp {
    nameTask: string
    onChange: (e: any) => void
    value: boolean
}

function ButtonCheck(props: ButtonCheckProp) {
    const { nameTask, onChange, value } = props
    return (
        <div className="check-container">
            <input
                type="checkbox"
                id={nameTask}
                name={nameTask}
                checked={value}
                onChange={onChange}
            />
            <label data-content={nameTask}>{nameTask}</label>
        </div>
    )
}

export default ButtonCheck
