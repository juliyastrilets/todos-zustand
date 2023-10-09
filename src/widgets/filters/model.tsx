interface Filter {
  id: number;
  title: string;
  type: string;
}

export const filters: Filter[] = [
  {
    id: 1,
    title: 'All',
    type: 'all',
  },
  {
    id: 2,
    title: 'Not completed',
    type: 'uncompleted',
  },
  {
    id: 3,
    title: 'Completed',
    type: 'completed',
  },
];
