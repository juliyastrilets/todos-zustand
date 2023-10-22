'use client';
import style from './style.module.css';
import { useFilter } from '@/store/filterTodos';
import { useTodos } from '@/store/todos';
import { Todo } from '@/components/todo';

export const TodoList = () => {
  const filter = useFilter((state) => state.filter);
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const todos = useTodos((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'uncompleted':
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });
  return (
    <ul className={style.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={style.item}>
          <Todo
            title={todo.title}
            completed={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
