import * as Types from '../actions/types';

const INITIALIZE = {
    todosList: [],
    editTodo: false
}

export default (state = INITIALIZE, action) => {
    switch(action.type) {
        case Types.GET_ALL_TODOS_SUCCESS:
            return {
                todosList: [...action.payload.todosList],
                editTodo: action.payload.editTodo
            }
        default:
            return state;
    }
}