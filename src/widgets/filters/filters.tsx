import { Button } from "@/ui/button/button";
import style from "./filters.module.css";
import { useFilter } from "@/store/filterTodos";

// interface Filter {
//   id: number;
//   title: string;
// }
// const filters: Filter[] = [
//   {
//     id: 1,
//     title: "All",
//   },
//   {
//     id: 2,
//     title: "Not completed",
//   },
//   {
//     id: 3,
//     title: "Completed",
//   },
// ];

export const Filters = () => {
  const { filter, setFilter } = useFilter();
  return (
    <div className={style.wrapper}>
      {/* {filters.map((filter) => (
        <Button color="white" key={filter.id} disabled={filter === 'all'}>
          <span>{filter.title}</span>
        </Button>
      ))} */}
      <Button
        color="white"
        disabled={filter === "all"}
        onClick={() => setFilter("all")}
      >
        <span>All</span>
      </Button>
      <Button
        color="white"
        disabled={filter === "uncompleted"}
        onClick={() => setFilter("uncompleted")}
      >
        <span>Not completed</span>
      </Button>
      <Button
        color="white"
        disabled={filter === "completed"}
        onClick={() => setFilter("completed")}
      >
        <span>Completed</span>
      </Button>
    </div>
  );
};
