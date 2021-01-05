import React from 'react'

interface TodoListProps {
    items: {id: string, text: string}[]
    deleteItem: (id: string)=> void
}

function Todolist({ items, deleteItem }: TodoListProps) {
    
    return (
        <ul>
            {items.map(element => <li key={element.id}>
                <span>{element.text}</span>
                <button type={'button'} onClick={() => deleteItem(element.id)}>{'DELETE TODO'}</button>
            </li>)}
        </ul>
    )
}

export default Todolist