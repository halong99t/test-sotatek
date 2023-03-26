import ButtonCheck from '../ButtonCheck'
import Button from '../Button'
import Box from '../Box'
import './styles.scss'
import { TypeData, InputEvent } from '../../type'

interface BoxTodoProps {
    handleUpdateName: (e: InputEvent) => void
    nameUpdate: string
    descriptionUpdate: string
    handleUpdateDescription: (e: InputEvent) => void
    handleUpdateSelect: (e: InputEvent) => void
    handleDate: (e: Date) => void
    date: Date
    select: string
    handleOnSubmit: (item: TypeData) => void
    showDetail: boolean
    handleShowDetail: (item: TypeData) => void
    handleRemoveItem: (item: TypeData) => void
    listData: TypeData[]
    submitType: string
    id: number
    onCheckTask: (event: InputEvent, item: TypeData) => void
}

function BoxTodo(props: BoxTodoProps) {
    const {
        handleUpdateName,
        nameUpdate,
        descriptionUpdate,
        handleUpdateDescription,
        handleUpdateSelect,
        handleDate,
        date,
        select,
        handleOnSubmit,
        showDetail,
        handleShowDetail,
        handleRemoveItem,
        listData,
        id,
        onCheckTask,
    } = props

    return (
        <>
            {listData &&
                listData.length > 0 &&
                listData.map((item: any, index) => {
                    return (
                        <div id={`${index}`} className="box-todo-container">
                            <div className="box-todo-top">
                                <div className="box-todo-left">
                                    <ButtonCheck
                                        nameTask={item.name}
                                        value={item.check || false}
                                        onChange={(event) =>
                                            onCheckTask(event, item)
                                        }
                                    />
                                </div>
                                <div className="box-todo-right">
                                    <Button
                                        name="Detail"
                                        onClick={() => handleShowDetail(item)}
                                    />
                                    <Button
                                        name="Remove"
                                        onClick={() => handleRemoveItem(item)}
                                    />
                                </div>
                            </div>
                            {showDetail && id === item.id && (
                                <div className="box-todo-bottom">
                                    <div className="box-todo-bottom-container">
                                        <Box
                                            handleOnChanceName={
                                                handleUpdateName
                                            }
                                            valueInput={nameUpdate}
                                            valueDescription={descriptionUpdate}
                                            handleOnChanceDescription={
                                                handleUpdateDescription
                                            }
                                            handleSelect={handleUpdateSelect}
                                            handleDate={handleDate}
                                            date={date}
                                            select={select}
                                            handleOnSubmit={() =>
                                                handleOnSubmit(item)
                                            }
                                            submitType="Update"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
        </>
    )
}

export default BoxTodo
