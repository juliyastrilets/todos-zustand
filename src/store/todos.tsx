import { create } from 'zustand';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
  addTodos: (title: string) => void;
  toggleTodo: (id: number) => void;
}

export const useTodos = create<TodosState>((set, get) => ({
  todos: [
    { id: 1, title: ' Learn JS', completed: true },
    { id: 2, title: ' Learn React', completed: false },
  ],
  addTodos: (title: string) =>
    set((state) => {
      const newTodo = {
        id: state.todos.length + 1,
        title,
        completed: false,
      };
      return { todos: [...state.todos, newTodo] };
    }),
  toggleTodo: (id: number) =>
    set({
      todos: get().todos.map((todo) =>
        id === todo.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      ),
    }),
}));
