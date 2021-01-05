import React, { useState } from 'react';
import AddTodo from './components/TodoList/AddTodo/AddTodo';
import Todolist from './components/TodoList/TodoList';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos ] = useState<Todo[]>([])

  function todoAddHandler(text: string): void {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}])
  }

  function todoDeleteHandler(id: string): void {
    console.log('!!!!', id)
  }

  return (
    <div className="App">
      <AddTodo addItem={todoAddHandler}/>
      <Todolist items={todos} deleteItem={todoDeleteHandler}/>
    </div>
  );
}

export default App;
