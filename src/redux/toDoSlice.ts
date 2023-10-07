import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { addToDoData, deleteToDoData, fetchData } from "../components/toDoApi";

export interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export const getTodos = createAsyncThunk("todo/fetchData", async () => {
  const response = await fetchData();
  return response;
});

export const addTodos = createAsyncThunk("todo/addToDoData", async (todo: Todo) => {
  const response = await addToDoData(todo);
  return response;
});

export const deleteTodos = createAsyncThunk("todo/deleteTodos", async (id) => {
  const response = await deleteToDoData(id);
  return response.data;
});

const initialToDo: Todo[] = [];

const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    list: initialToDo,
    active: null,
    status: "idle",
  },
  reducers: {
    // addTodo(state, action) {
    //   state.list = [...state.list, action.payload];
    // },
    // deleteTodo(state, action) {
    //   state.list = state.list.filter((item) => item.id !== action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = action.payload;
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = "error";
      })
      .addCase(addTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addTodos.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action)
        state.list = [...state.list, action.payload];
      })
      .addCase(addTodos.rejected, (state) => {
        state.status = "error";
      })
      .addCase(deleteTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodos.fulfilled, (state, action) => {
        state.status = "idle";
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(deleteTodos.rejected, (state) => {
        state.status = "error";
      })
      .addDefaultCase((state) => {
        console.log(state);
      });
  },
});

// export const { addTodo, deleteTodo } = toDoSlice.actions;
export default toDoSlice;
