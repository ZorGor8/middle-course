import Header from './components/Header';
import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { Todo } from './types/Todo';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const initialTodos: Todo[] = [
    { id: 1, text: 'Изучить React', isCompleted: true },
    { id: 2, text: 'Подготовиться к собеседованию', isCompleted: false },
    { id: 3, text: 'Создать Todo-лист', isCompleted: false },
  ];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text: text,
      isCompleted: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <>
      <Header />
      <TodoForm addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default App;