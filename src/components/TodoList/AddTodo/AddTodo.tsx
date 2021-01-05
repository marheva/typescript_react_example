import React, { useRef } from 'react'

interface AddTodoProps {
   addItem: (text: string) => void
}

function AddTodo({ addItem }: AddTodoProps) {
    const textInputRef = useRef<HTMLInputElement>(null)
    function submitHandler(event: React.FormEvent) {
        event.preventDefault()
        const enteredText = textInputRef.current?.value
        if(addItem && enteredText) {
            addItem(enteredText)
        }
    }

    return (
       <form onSubmit={(event: React.FormEvent) => submitHandler(event)}>
           <div>
               <label htmlFor={'todo-text'}>{'Todo text'}</label>
               <input type="text" id={'todo-text'} ref={textInputRef}/>
           </div>
           <button type='submit'>{'Add todo'}</button>
       </form>
    )
}

export default AddTodo