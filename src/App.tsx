// src/App.tsx

import Header from './components/Header';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types/Todo';

function App() {
  const initialTodos: Todo[] = [
    { id: 1, text: 'Изучить React', isCompleted: true },
    { id: 2, text: 'Подготовиться к собеседованию', isCompleted: false },
    { id: 3, text: 'Создать Todo-лист', isCompleted: false },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return (
    <>
      <Header />
      <ul>
        {todos.map((todo) => (
          // Передаём весь объект 'todo'
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default App;