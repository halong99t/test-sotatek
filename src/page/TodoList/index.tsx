import { useState, useEffect } from 'react'
import './styles.scss'
import BoxTodo from '../../component/BoxTodo'
import Button from '../../component/Button'
import Input from '../../component/Input'
import { InputEvent } from '../../type/index'
import { getDataStorage, setDataStorage } from '../../utils/index'
import { TypeData } from '../../type/index'
import { toast } from 'react-toastify'

function TodoList() {
    const [searchValue, setSearchValue] = useState<string>('')
    const [nameUpdate, setNameUpdate] = useState<string>('')
    const [descriptionUpdate, setDescriptionUpdate] = useState<string>('')
    const [date, setDate] = useState<Date>(new Date())
    const [select, setSelect] = useState<string>('')
    const [showDetail, setShowDetail] = useState<boolean>(false)
    const [listData, setListData] = useState<TypeData[]>([])
    const [listDataCheck, setListDataCheck] = useState<TypeData[]>([])

    const [id, setId] = useState<number>(0)

    const getItem = () => {
        const dataTemp = getDataStorage() || []
        const arrTemp: TypeData[] = []
        dataTemp.forEach((item: TypeData) => {
            if (item.check) {
                arrTemp.push(item)
            }
        })
        setListDataCheck(arrTemp)
        setListData(dataTemp)
        setSearchValue('')
    }

    const FindIndex = (id: number) => {
        const temp = getDataStorage().findIndex((items: TypeData) => {
            return items.id === id
        })
        return temp
    }

    useEffect(() => {
        getItem()
    }, [])

    const handleData = (item: TypeData) => {
        setId(item.id)
        setNameUpdate(item.name)
        setDescriptionUpdate(item.description)
        setDate(new Date(item.date))
        setSelect(item.select)
    }

    const handleDone = () => {}

    const handleSearchNewTask = (event: InputEvent) => {
        const temp = getDataStorage().filter((item: any) => {
            return item.name.toLowerCase().includes(event.target.value)
        })

        setListData(temp)
        setSearchValue(event.target.value)
    }

    const handleUpdateName = (event: InputEvent) => {
        setNameUpdate(event.target.value)
    }

    const handleUpdateDescription = (event: InputEvent) => {
        setDescriptionUpdate(event.target.value)
    }

    const handleUpdateSelect = (event: InputEvent) => {
        setSelect(event.target.value)
    }

    const handleDate = (event: Date) => {
        setDate(event)
    }

    const handleShowDetail = (item: TypeData) => {
        setShowDetail(!showDetail)
        handleData(item)
    }

    const handleRemoveItem = (item: TypeData) => {
        const id = FindIndex(item.id)
        const data = getDataStorage()
        data.splice(id, 1)
        setDataStorage(data)
        getItem()
        toast.success(`Remove task ${item.name} sucssecful !`)
    }

    const handleOnSubmit = (item: TypeData) => {
        const id = FindIndex(item.id)
        const data = getDataStorage()

        const dataTemp = {
            id: id,
            name: nameUpdate,
            description: descriptionUpdate,
            date: date,
            select: select,
        }

        data[id] = dataTemp
        setDataStorage(data)
        getItem()
        toast.success('Update sucssecful !')
    }

    const onCheckTask = (event: any, item: TypeData) => {
        const id = FindIndex(item.id)
        const data = getDataStorage()
        const dataTemp = {
            ...data[id],
            check: event.target.checked,
        }

        data[id] = dataTemp
        setDataStorage(data)
        getItem()
    }

    const handleRemove = () => {
        const data = getDataStorage()
        const arrTemp: TypeData[] = []
        data.forEach((items: TypeData) => {
            if (items.check === false) {
                arrTemp.push(items)
            }
        })

        setDataStorage(arrTemp)
        getItem()
        toast.success('Remove all task sucssecful')
    }

    return (
        <div className="todo-container">
            <div className="todo-title">
                To Do List
                <Input
                    name="search"
                    placeholder="Search by name task ..."
                    value={searchValue}
                    id="search"
                    onChange={handleSearchNewTask}
                />
            </div>
            <div className="todo-box">
                <BoxTodo
                    listData={listData}
                    handleUpdateName={handleUpdateName}
                    nameUpdate={nameUpdate}
                    descriptionUpdate={descriptionUpdate}
                    handleUpdateDescription={handleUpdateDescription}
                    handleUpdateSelect={handleUpdateSelect}
                    handleDate={handleDate}
                    date={date}
                    select={select}
                    handleOnSubmit={handleOnSubmit}
                    showDetail={showDetail}
                    handleShowDetail={handleShowDetail}
                    handleRemoveItem={handleRemoveItem}
                    submitType="Update"
                    id={id}
                    onCheckTask={onCheckTask}
                />
            </div>

            {listDataCheck && listDataCheck.length > 0 && (
                <div className="todo-bottom">
                    <div className="todo-bottom-title">Bulk Action:</div>
                    <div className="todo-bottom-actions">
                        <Button name="Done" onClick={handleDone} />
                        <Button name="Remove" onClick={handleRemove} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default TodoList
