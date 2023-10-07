import { Todo } from "../redux/toDoSlice";

const mockToDos: Todo[] = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    completed: true
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    completed: false
  },
];

export function fetchData() {
  return new Promise<Todo[]>((resolve) =>
    setTimeout(() => resolve(mockToDos), 500),
  );
}

export function addToDoData(todo: Todo) {
  return new Promise<Todo>((resolve) =>
    setTimeout(() => resolve(todo), 500),
  );
}

export function deleteToDoData(id: number) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: id }), 500),
  );
}
