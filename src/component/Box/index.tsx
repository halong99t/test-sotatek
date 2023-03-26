import React from 'react'
import Input from '../Input'
import ResizeInput from '../../component/ResizeInput'
import DueDate from '../DueDate'
import Select from '../Select'
import Button from '../Button'
import './styles.scss'

import { TypeData, InputEvent } from '../../type'

interface BoxProps {
    handleOnChanceName: (e: InputEvent) => void
    handleOnChanceDescription: (e: InputEvent) => void
    valueInput: string
    valueDescription: string
    select: string
    handleSelect: (e: InputEvent) => void
    date: Date
    handleDate: (e: Date) => void
    handleOnSubmit: (iten: TypeData) => void
    submitType: string
}

function Box(props: BoxProps) {
    const {
        handleOnChanceName,
        valueInput,
        valueDescription,
        handleOnChanceDescription,
        select,
        handleSelect,
        handleDate,
        date,
        handleOnSubmit,
        submitType,
    } = props

    return (
        <div className="box-container">
            <Input
                name="add"
                placeholder="add new task ..."
                value={valueInput}
                id="add"
                onChange={handleOnChanceName}
            />
            <div className="box-text">
                <ResizeInput
                    onChange={handleOnChanceDescription}
                    value={valueDescription}
                    name="description"
                    id="description"
                />
            </div>
            <div className="box-select">
                <DueDate date={date} handleDate={handleDate} />
                <Select value={select} onchange={handleSelect} />
            </div>
            <div className="box-submit">
                <Button name={submitType} onClick={handleOnSubmit} />
            </div>
        </div>
    )
}

export default Box
