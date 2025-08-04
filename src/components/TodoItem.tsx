import React from 'react';
import { Todo } from '../types/Todo';

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Удалить</button>
    </li>
  );
};

export default TodoItem;