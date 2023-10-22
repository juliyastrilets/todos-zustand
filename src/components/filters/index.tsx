'use client';
import style from './style.module.css';
import { Button } from '@/ui/button';
import { useFilter } from '@/store/filterTodos';
import { filters } from './model';

export const Filters = () => {
  const { filter, setFilter } = useFilter();

  return (
    <div className={style.wrapper}>
      {filters.map((f) => {
        const isActive = f.type === filter;
        return (
          <Button
            key={f.id}
            kind={isActive ? 'primary' : 'default'}
            onClick={() => setFilter(f.type)}
            disabled={isActive}
          >
            {f.title}
          </Button>
        );
      })}
    </div>
  );
};
