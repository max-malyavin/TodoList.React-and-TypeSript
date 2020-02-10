import React, { useState, useRef } from 'react';


interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FunctionComponent<TodoFormProps> = (props)=> {

    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const changHadler =(event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
        
        }

        return (
        <div className="input-field mt2">
        <input 
        ref={ref}
        onKeyPress={keyPressHandler}
        // onChange={changHadler}
        // value={title}
         type="text" id="title" placeholder="Введите название дела"/>
        <label htmlFor="title" className='active'>Введите название дела</label>
        </div>
        )
}