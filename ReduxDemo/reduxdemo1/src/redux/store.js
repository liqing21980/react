import {createStore} from 'redux'   //从redux中引入createStore 用于创建store对象
import reducer from './reducer'      //引入reducer
export default createStore(reducer)
