import { useState, FC } from "react";
// import { addTodo } from "../../redux/toDoSlice";
import { useAppDispatch } from "../../redux/hooks";
import { addToDoData } from "../toDoApi";
import { Box, Button, TextField } from "@mui/material";

interface FormData {
  title: string;
  description: string;
}

// interface Error {
//     [ value: string ]: string
// }

const initialData: FormData = {
  title: "",
  description: "",
};

// const validate = (values) => {
//     let errors = '';
//     if (!values) errors = 'title is required'
//     return errors;
// }

const CreateTask: FC = () => {
  const [data, setData] = useState<FormData>(initialData);
  const [error, setError] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [touched, setTouched] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const onCreateTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (data.title === "") {
      setError("Поле не должно быть пустым!");
      return;
    }

    if (data.title.length > 25) {
      setError("Поле не должно содержать более 25 символов!");
      return;
    }
    console.log(data);
    dispatch(addToDoData(data));
    setData({ title: "", description: "" });
    setError("");
  };

  return (
    <section className="add__todo">
      <Box
        gap={2}
        display="flex"
        alignItems="center"
        component="form"
        onSubmit={onCreateTodo}
      >
        <TextField
          autoFocus={true}
          mr={2}
          type="text"
          id="todo"
          name="todo"
          label="Add todo"
          value={data.title}
          helperText={error}
          error={!!error}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <Button mx="auto" type="submit" variant={"contained"}>
          Add New Task
        </Button>
      </Box>
    </section>
  );
};

export default CreateTask;
