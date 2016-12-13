import reduxSaga from 'npm:redux-saga';
const { put, fork, take } = reduxSaga.effects;

function* handleRequestUser() {
  while (true) {
    const action = yield take('REMOVE_USER');
    console.log('handleRequestUser', action);
    yield put({
      type: 'ADD_USER',
    });
  }
}

export default function* rootSaga() {
  yield fork(handleRequestUser);
}
