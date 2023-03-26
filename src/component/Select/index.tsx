import React from 'react'
import './styles.scss'
import { valueSelect } from '../../utils/constant'

interface SelectProps {
    value: string
    onchange: (e: any) => void
}

function Select(props: SelectProps) {
    const { value, onchange } = props
    return (
        <div className="select-container">
            <div className="select-title">Piority</div>
            <select
                className="select"
                name="select"
                id="select"
                onChange={onchange}
                value={value}
            >
                {valueSelect.map((item, index) => {
                    return (
                        <option id={`${index}`} value={item.value}>
                            {item.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select
