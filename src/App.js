import React from 'react';
import './App.css';
import Todos from './components/Todos';
import { totalTodos } from './state/TotalTodos';
import { useRecoilValue } from 'recoil';

function App() {
  const totalTodoState = useRecoilValue(totalTodos)
  return (
      <div className='App'>
        <h1>To do list</h1>
        <Todos />
        <h3>Total ToDo's: {totalTodoState} </h3>  
      </div>
  );
}
export default App;