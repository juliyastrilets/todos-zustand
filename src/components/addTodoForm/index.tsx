'use client';
import { useState } from 'react';
import { useTodos } from '@/store/todos';
import { Input } from '@/ui/input';

interface AddTodoFormProps {}

export const AddTodoForm = ({}: AddTodoFormProps) => {
  const [inputValue, setInputValue] = useState('');
  const addTodo = useTodos((state) => state.addTodos);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Write text and press enter"
      />
    </form>
  );
};
