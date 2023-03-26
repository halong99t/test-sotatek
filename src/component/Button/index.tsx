import React from 'react'
import './styles.scss'

interface ButtonProps {
    name: string
    onClick: (item: any) => void
}

function Button(props: ButtonProps) {
    const { name, onClick } = props

    return (
        <>
            {name === 'Detail' && (
                <button className="button-style-detail" onClick={onClick}>
                    {name}
                </button>
            )}
            {name === 'Remove' && (
                <button className="button-style-remove" onClick={onClick}>
                    {name}
                </button>
            )}
            {(name === 'Add' || name === 'Update') && (
                <button className="button-style-add" onClick={onClick}>
                    {name}
                </button>
            )}
            {name === 'Done' && (
                <button className="button-style-done" onClick={onClick}>
                    {name}
                </button>
            )}
        </>
    )
}

export default Button
