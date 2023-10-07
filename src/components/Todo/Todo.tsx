import { Todo as ITodo } from "../../redux/toDoSlice";
import { Box, Checkbox, Typography } from "@mui/material";

export const Todo = ({ todo }: { todo: ITodo }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Typography>
        <p>{todo.title}</p>
      </Typography>
      <Typography display="flex">
        <Checkbox
          checked={todo.completed}
          onChange={() => console.log("")}
          name="checkedA"
        />
        {/*<IconButton aria-label="delete">*/}
        {/*  <DeleteIcon />*/}
        {/*</IconButton>*/}
      </Typography>
    </Box>
  );
};
