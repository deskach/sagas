import {delay} from "redux-saga";
import {fork, put, takeEvery} from "redux-saga/effects";

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  console.log('async call');
  yield delay(1000); // returns a promise which resolves in 1sec
  yield put({type: 'INCREMENT'}); //returns an effect to dispatch 'INCREMENT'
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* rootSaga() {
  yield [
    fork(helloSaga),
    fork(watchIncrementAsync)
  ];
}
