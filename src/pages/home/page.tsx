import styles from './page.module.css';
import { Header } from '@/components/header';
import { AddTodoForm } from '@/components/addTodoForm';
import { TodoList } from '@/components/todoList';
import { Filters } from '@/components/filters';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <div className={styles.addForm}>
          <AddTodoForm />
        </div>
        <div className={styles.filters}>
          <Filters />
        </div>
        <TodoList />
      </main>
    </>
  );
}
