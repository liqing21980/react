/* 
reducer:根据action中的type和data，决定操作动作
1.初始化state
2.更新state
*/
//设置初始化状态
import {INCREMENT,DECREMENT} from './action_types'
let initState = 0
export default function operaCount(prestate = initState, action) {
    //根据action中的type和data，决定操作动作
    const { type, data } = action
    let newState
    switch (type) {
        case INCREMENT:
            newState = prestate + data * 1
           // console.log(newState)
            return newState
        case DECREMENT:
            newState = prestate - data * 1
           // console.log(newState)
            return newState
        default:
            return prestate
    }


}