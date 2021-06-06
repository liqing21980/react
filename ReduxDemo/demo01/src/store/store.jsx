import { applyMiddleware, createStore,compose } from 'redux'
import reducer from './reducer'
//import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySaga from './saga'
const sagaMiddleware=createSagaMiddleware()
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
{/*const enhance =composeEnhancers(applyMiddleware(thunk))*/}
const enhance =composeEnhancers(applyMiddleware(sagaMiddleware))
let store= createStore(reducer,enhance)
sagaMiddleware.run(mySaga)

export default store