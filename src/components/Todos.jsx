import '../App.css';
import { todoState } from '../state/todoState';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import Todo from './Todo';


export default function Todos () {
    
    const [todos, setTodos] = useRecoilState(todoState); 
    const [inputText, setInputText] = useState('')

    function addTodo() {            
        setTodos((prevTodos) => [...prevTodos, {id: Math.random(), text: inputText}])
        setInputText('')
    }
    
    function handleInputChange(e) {
        setInputText(e.target.value)
    }
    console.log({todos})
    function clearTodos(){
        setTodos([])
    }

    return (
        <main className='Todo'>
            <input className='Form' value={inputText} onChange={handleInputChange} type="text" id="todoInput" />
            <div className='Buttons'>
                <button className="Button" onClick={addTodo}>Add ToDo</button>
                <button className="Button" onClick={clearTodos} >Clear ToDo's</button>
            </div>
            {
                todos.map((todo) => {
                    return (
                    <Todo key={todo.id} text={todo.text} id={todo.id} />
                    )
                })
            }
        </main>
    )
}