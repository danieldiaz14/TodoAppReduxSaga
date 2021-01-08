import api from "../api";
import * as Types from "../actions/types";
import * as actions from "../actions";
import { sortByTitle, sortByDescription } from "../selectors/todosSelector";
import {
  call,
  takeEvery,
  fork,
  takeLatest,
  put,
  take,
} from "redux-saga/effects";
//workerSaga
function* getTodos() {
  try {
    const result = yield call(() => api.get("/todos"));
    yield put(
      actions.getTodosSuccess({
        todosList: result.data,
        editTodo: false,
      })
    );
  } catch (e) {
    console.log(e);
  }
}
//watcherSaga
function* watchGetTodos() {
  yield takeEvery(Types.GET_ALL_TODOS, getTodos);
}

//workerSaga
function* createTodo(action) {
  try {
    yield call(
      ({ title, description }) => {
        return api.post("/todos", {
          title,
          description,
        });
      },
      { title: action.payload.title, description: action.payload.description }
    );
    yield call(getTodos);
  } catch (e) {
    console.log(e);
  }
}

//watcherSaga
function* watchCreateTodo() {
  yield takeLatest(Types.CREATE_TODO, createTodo);
}

//workerSaga
function* deleteTodo({ todoId }) {
  try {
    yield call((todoId) => {
      return api.delete(`/todos/${todoId}`);
    }, todoId);

    yield call(getTodos);
  } catch (e) {
    console.log(e);
  }
}
//watcherSaga
function* watchDeleteTodo() {
  while (true) {
    const action = yield take(Types.DELETE_TODO);
    yield call(deleteTodo, {
      todoId: action.payload.todoId,
    });
  }
}
//workerSaga
const test = ({ title, description, id }) => {
  return api.put(`/todos/${id}`, {
    title: title,
    description: description,
  });
};
function* updateTodo(action) {
  try {
    yield call(test, {
      title: action.payload.title,
      description: action.payload.description,
      id: action.payload.id,
    });
    yield call(getTodos);
  } catch (e) {
    console.log(e);
  }
}

//watcherSaga
function* watchUpdateTodo(action) {
  yield takeLatest(Types.UPDATE_TODO, updateTodo);
}

//workerSaga
function* selectTodo() {
  try {
    const result = yield call(() => api.get("/todos"));
    yield put(
      actions.getTodosSuccess({
        todosList: result.data,
        editTodo: true,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

//watcherSaga
function* watchSelectTodo() {
  yield takeLatest(Types.SELECT_TODO, selectTodo);
}

// workerSaga
function* selectTodoList({ payload }) {
  try {
    const result = yield call(() => api.get("/todos"));
    const sortTodosBy = payload === "title" ? sortByTitle : sortByDescription;
    const sortedList = sortTodosBy(result.data);
    yield put(
      actions.getTodosSuccess({
        todosList: sortedList,
        editTodo: false,
      })
    );
  } catch (e) {
    console.log(e);
  }
}

//watcherSaga
function* watchSelectTodoList() {
  yield takeLatest(Types.SELECT_DISPLAY_LIST, selectTodoList);
}

const TodosSaga = [
  fork(watchGetTodos),
  fork(watchCreateTodo),
  fork(watchDeleteTodo),
  fork(watchSelectTodo),
  fork(watchUpdateTodo),
  fork(watchSelectTodoList),
];

export default TodosSaga;
