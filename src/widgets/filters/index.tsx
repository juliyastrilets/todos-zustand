import style from './style.module.css';
import { Button } from '@/ui/button';
import { useFilter } from '@/store/filterTodos';
import { filters } from './model';

export const Filters = () => {
  const { filter, setFilter } = useFilter();
  return (
    <div className={style.wrapper}>
      {filters.map((f) => (
        <Button
          color="white"
          key={f.id}
          disabled={filter === 'all'}
          onClick={() => setFilter(f.type)}
        >
          <span>{f.title}</span>
        </Button>
      ))}
    </div>
  );
};
