import React from 'react'
import store from './store'
import { getMyListAction, changeInputAction, addItemAction, deleteItemAction } from './actionCreator'
import TodoListUI from './TodoListUI'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    componentDidMount() {
        /* redux-thunk   getTodoList
        const action= getTodoList()
         console.log(action)
         store.dispatch(action) */
        //redux-sga
        const action = getMyListAction()
        store.dispatch(action)
    }
    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    onbtnClick = () => {
        const action = addItemAction()
        store.dispatch(action)
        //  this.textInput.current.state.value = '';
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                inputValues={this.state.inputValues}
                changeInputValue={this.changeInputValue}
                onbtnClick={this.onbtnClick}
                list={this.state.list}
                deleteItem={this.deleteItem}

            />
        )
    }
}
