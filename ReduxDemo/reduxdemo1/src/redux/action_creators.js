//创建increment的action
import {INCREMENT,DECREMENT} from './action_types'
export const createIncrementAction=value=>(  {type:INCREMENT,data:value})

export const createDecrementAction=value=>(  {type:DECREMENT,data:value})

