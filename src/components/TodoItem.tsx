// src/components/TodoItem.tsx

// Импортируем наш тип, чтобы использовать его
import { Todo } from '../types/Todo';

// Описываем, какие пропсы ожидает наш компонент
interface TodoItemProps {
  // Здесь мы говорим, что компонент ожидает свойство 'todo' типа 'Todo'
  todo: Todo;
  // Мы также можем передать отдельные свойства, если хотим
  // text: string;
  // isCompleted: boolean;
}

// И используем этот интерфейс в компоненте
const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
      {todo.text}
    </li>
  );
};

export default TodoItem;