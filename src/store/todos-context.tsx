import React, { useState } from 'react';
import Todo from '../models/todos';

type TodosContextObj={
  items: Todo[];
  addTodo: (text:string) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});


const TodosContextProvider:React.FC=(props)=>{
  const [listTodo, setListTodo] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setListTodo((prevTodo) => prevTodo.concat(newTodo));
  };
  const removeTodoHandler = (id: string) => {
    return setListTodo(prevTodos=>{
      return prevTodos.filter(todo=>todo.id!==id)
    })
  };

  const contextValue:TodosContextObj={
    items:listTodo,
    addTodo:addTodoHandler,
    removeTodo:removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>
{props.children}
  </TodosContext.Provider>
}

export default TodosContextProvider
