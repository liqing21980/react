import{CHANGE_INPUT,ADD_ITEM,DELETEITEM,GET_List} from './actionTypes'
const initState={
    inputValues:'请输入增加项',
    list:[    
    ]
}
const reducer =(state=initState, action )=>{
    //reducer里只能接受state，不能改变state
     if(action.type===CHANGE_INPUT){
      //  console.log(action.type)
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValues=action.value
        return  newState
    } else    if(action.type===ADD_ITEM){
       // console.log(action.type)deepCloneJSON.stringify(obj)
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValues)
        newState.inputValues=''
        return newState
    }else if(action.type===DELETEITEM){
        //console.log(action)
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    } else if(action.type===GET_List){
        let newState=JSON.parse(JSON.stringify(state))
        //console.log(action.data.list)
        newState.list=action.data.list
        return newState
    }  else{
        return state
    }

}
export default reducer