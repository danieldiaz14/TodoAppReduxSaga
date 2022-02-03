import * as types from "./types";

const {
  CREATE_TODO,
  DELETE_TODO,
  GET_ALL_TODOS,
  GET_ALL_TODOS_SUCCESS,
  UPDATE_TODO,
  SELECT_DISPLAY_LIST,
  SELECT_TODO,
  SORT_BY_DESCRIPTION,
  SORT_BY_TITLE,
} = types;

export const getTodos = () => ({
  type: GET_ALL_TODOS,
});

export const getTodosSuccess = ({ todosList, editTodo }) => ({
  type: GET_ALL_TODOS_SUCCESS,
  payload: {
    todosList: [...todosList],
    editTodo: editTodo,
  },
});

export const createTodo = ({ title, description }) => ({
  type: CREATE_TODO,
  payload: {
    title,
    description,
  },
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: {
    todoId: todoId,
  },
});

export const updateTodo = ({ id, title, description }) => ({
  type: UPDATE_TODO,
  payload: {
    title: title,
    description: description,
    id: id,
  },
});

export const selectTodo = () => ({
  type: SELECT_TODO,
});

export const selectTodoList = (type) => ({
  type: SELECT_DISPLAY_LIST,
  payload: type,
});

export const sortByTitle = () => ({
  type: SORT_BY_TITLE,
});

export const sortByDescription = () => ({
  type: SORT_BY_DESCRIPTION,
});
