import React, { useContext, useRef } from 'react';
import Todo from '../models/todos';
import { TodosContext } from '../store/todos-context';
import classes from './NewTodo.module.css'

const NewTodo: React.FC = (props) => {
  const todosCtx=useContext(TodosContext)
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredText = todoTextInput.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }
    todosCtx.addTodo(enteredText)
    
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
