import {put, takeEvery} from 'redux-saga/effects'
import { GET_MY_LIST } from './actionTypes'
import {getListAction} from './actionCreator'
import axios from 'axios'
//generator
function* mySaga(){
    yield takeEvery(GET_MY_LIST,getList)
}

function* getList(){
    console.log('------------------jhjhljlkjl')
    const res=yield axios.get('http://localhost:53000/data')
    const action= getListAction(res.data)
   yield put(action)
  
}
export default mySaga