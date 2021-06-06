import {CHANGE_INPUT,ADD_ITEM,DELETEITEM,GET_List,GET_MY_LIST} from './actionTypes'
import axios from 'axios'

export const changeInputAction=(value)=>({type:CHANGE_INPUT,value})
export const addItemAction=()=>({  type:ADD_ITEM})
export const deleteItemAction=(index)=>({type:DELETEITEM,index})
export const getListAction=(data)=>({type:GET_List,data})
export  const getTodoList=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:53000/data')
        .then((res)=>{
            const data=res.data
           const action =getListAction(data)
           dispatch(action)
        })
    }
}

export const getMyListAction=()=>({
    type:GET_MY_LIST
})