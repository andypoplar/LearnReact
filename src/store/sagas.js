import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators'

function* getInitList() {
  // const res = yield axios.get('xxx')
  const action = initListAction([1 ,2, 3])
  console.log(action)
  yield put(action)
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

export default mySaga