import { DATA } from './constant'
import { TypeData } from '../type/index'

export const setDataStorage = (item: TypeData | TypeData[]) => {
    const data = JSON.stringify(item)
    localStorage.setItem(DATA, data)
}

export const getDataStorage = () => {
    const data: any = localStorage.getItem(DATA)
    return JSON.parse(data)
}
