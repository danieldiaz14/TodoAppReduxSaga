import * as types from './types';

const Types = {
    ...types
};

export const getTodos = () => ({
    type: Types.GET_ALL_TODOS
});

export const getTodosSuccess = ({todosList, editTodo}) => ({
    type: Types.GET_ALL_TODOS_SUCCESS,
    payload: {
        todosList: [...todosList],
        editTodo: editTodo
    }
})

export const createTodo = ({title, description}) => ({
    type: Types.CREATE_TODO,
    payload: {
        title,
        description
    }
});

export const deleteTodo = (todoId) => ({
    type: Types.DELETE_TODO,
    payload: {
        todoId: todoId
    }
});

export const updateTodo = ({id, title, description}) => ({
    type: Types.UPDATE_TODO,
    payload: {
        title: title,
        description: description,
        id: id
    }
});

export const selectTodo = () => ({
    type: Types.SELECT_TODO
})

export const selectTodoList = (type) => ({
    type: Types.SELECT_DISPLAY_LIST,
    payload: type
});