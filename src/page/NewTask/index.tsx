import React, { useState } from 'react'
import Box from '../../component/Box'
import './styles.scss'
import { InputEvent } from '../../type/index'
import { getDataStorage, setDataStorage } from '../../utils/index'
import { toast } from 'react-toastify'

function NewTask() {
    const [nameTask, setNameTask] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [select, setSelect] = useState<string>('normal')
    const [date, setDate] = useState(new Date())
    const listData = getDataStorage() || []

    const handleOnChanceName = (event: InputEvent) => {
        event.preventDefault()
        setNameTask(event.target.value)
    }

    const handleOnChanceDescription = (event: InputEvent) => {
        event.preventDefault()
        setDescription(event.target.value)
    }

    const handleSelect = (event: InputEvent) => {
        setSelect(event.target.value)
    }

    const handleDate = (event: Date) => {
        setDate(event)
    }

    const handleOnSubmit = () => {
        const id = Math.floor(Math.random() * 90000) + 10000
        const dataTemp = {
            id: id,
            name: nameTask,
            description: description,
            select: select,
            date: date,
            check: false,
        }

        if (nameTask === '') {
            toast.error('Please add name task')
        } else {
            toast.success('Add new task success')
            listData.push(dataTemp)
            setDataStorage(listData)
            setNameTask('')
            setDescription('')
            setSelect('normal')
            setDate(new Date())
        }
    }

    return (
        <div className="newtask-container">
            <div className="newtask-title">New Task</div>
            <div className="newtask-box">
                <Box
                    handleOnChanceName={handleOnChanceName}
                    handleOnChanceDescription={handleOnChanceDescription}
                    valueInput={nameTask}
                    valueDescription={description}
                    select={select}
                    handleSelect={handleSelect}
                    handleDate={handleDate}
                    date={date}
                    handleOnSubmit={handleOnSubmit}
                    submitType="Add"
                />
            </div>
        </div>
    )
}

export default NewTask
