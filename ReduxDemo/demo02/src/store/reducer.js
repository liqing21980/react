const initState={
    inputValue:'请输入list',
    list:[]
}
const  reducer=(state=initState,action)=>{
    if(action.type==='change_input'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }else if(action.type==='add_item'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }else if(action.type==='delete_item'){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    return state
}
export default reducer

