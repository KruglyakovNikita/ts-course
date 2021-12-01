import React, { useContext } from 'react';
import classes from './Todos.module.css';
import Todo from '../models/todos';
import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todo}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        ></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
