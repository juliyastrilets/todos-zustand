'use client';
import styles from './page.module.css';
import { Header } from '@/components/header';
import { AddTodoForm } from '@/components/addTodoForm';
import { TodoList } from '@/components/todoList';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className={styles.addForm}>
          <AddTodoForm />
        </div>
        <TodoList />
      </main>
    </>
  );
}
