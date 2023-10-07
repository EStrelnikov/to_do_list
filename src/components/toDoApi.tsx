import { Todo } from "../redux/toDoSlice";

const mockToDos = [
  {
    id: 1,
    title: "title1",
    description: "description1",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
  },
];

export function fetchData() {
  return new Promise<{ data: Todo }>((resolve) =>
    setTimeout(() => resolve({ data: mockToDos }), 500),
  );
}

export function addToDoData(todo) {
  return new Promise<{ data: Todo }>((resolve) =>
    setTimeout(() => resolve({ data: todo }), 500),
  );
}

export function deleteToDoData(id) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: id }), 500),
  );
}
