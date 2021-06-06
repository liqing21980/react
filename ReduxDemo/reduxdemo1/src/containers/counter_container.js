import Counter from '../components/counter'
import { connect } from 'react-redux'
import { createDecrementAction, createIncrementAction } from '../redux/action_creators'
//完整写法
/* function mapStateToProps(state) {
    return { count: state }
} */
//简写方式
//let mapStateToProps = state => ({ count: state })

//完整写法
/* function mapDispatchToProps(dispatch) {
    return {
        increment: (value) => { dispatch(createIncrementAction(value)) },
        decrement: (value) => { dispatch(createDecrementAction(value)) }
    }
} */

//简写方式
/* let mapDispatchToProps = dispatch => ({
    increment: (value) => { dispatch(createIncrementAction(value)) },
    decrement: (value) => { dispatch(createDecrementAction(value)) }
}) */
//完整写法
//export default connect(mapStateToProps, mapDispatchToProps)(Counter)
//简写方式
export default connect(
    (state) => ({ count: state }),
    {
        increment: createIncrementAction,
        decrement: createDecrementAction
    }
)(Counter)

/*  如果connect的第二个参数是mapDispatchToProps，
    那么ui组件接收到的increment是：(value) => { dispatch(createIncrementAction(value))
    那么ui组件接收到的decrement是： (value) => { dispatch(createDecrementAction(value)) }
 */


/* 如果connect的第二个参数是
    {increment: createIncrementAction,
    decrement: createDecrementAction}
    那么ui组件接收到的increment是： return dispatch(actionCreator.apply(void 0, arguments));
 */
//connect函数
/* function connet(createIncrementAction) {
    return (value) => {
        dispatch(createIncrementAction(value))
    } */