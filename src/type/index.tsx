export type InputEvent = React.ChangeEvent<HTMLInputElement>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>

export interface TypeData {
    id: number
    name: string
    description: string
    date: Date
    select: string
    check: boolean
}
