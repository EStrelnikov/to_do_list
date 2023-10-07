import CreateTask from "../CreateTask/CreateTask";
import { Todo } from "../Todo/Todo";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getTodos } from "../../redux/toDoSlice";
import { ClipLoader } from "react-spinners";
import { Box, Typography } from "@mui/material";

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  p: 2,
  border: 1,
  style: {
    width: "80wh",
    height: "80vh",
  },
};

export const Todos = () => {
  const todos = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, []);
  if (todos.status === "error") {
    return <div>Ошибка.Попробуйте позже...</div>;
  }
  return (
    <Box
      borderRadius={6}
      borderColor="text.primary"
      {...defaultProps}
      className="todos"
    >
      <Typography my={2} textAlign="center" variant="h3">
        ToDo App
      </Typography>

      <CreateTask />
      <section className="todos__container">
        <Typography my={2} textAlign="center" variant="h6">
          Todo List
        </Typography>
        {todos.status === "loading" && (
          <ClipLoader
            cssOverride={{
              display: "block",
              margin: "0 auto",
            }}
            className="loader"
            color="#367bd6"
          />
        )}
        {todos.list?.length > 0 ? (
          todos.list.map((todo) => (
            <Todo
              key={todo.title}
              todo={todo}
              onEditHandler={() => console.log("edit")}
            />
          ))
        ) : (
          <p>Список задач пуст</p>
        )}
      </section>
    </Box>
  );
};
