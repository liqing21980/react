import React from 'react'
import { connect } from 'react-redux'
const TodoList=(props)=>{
    let { inputValue, inputChange, btnClick, list } = props
    return (
        <div>
            <div>
                <input placeholder={inputValue}
                    onChange={inputChange} />&nbsp;&nbsp;
                <button onClick={btnClick}>提交</button>
            </div>
            <div>
                <ul>
                    {
                        list.map((item, index) => {
                            return (<li key={index} onClick={() => { props.deleteItem(index) }}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

//
const stateToProps = (state) => {
return {
    inputValue: state.inputValue,
    list: state.list
}
}
const dispatchToProps = (dispatch) => {
return {
    inputChange(e) {
        let action = {
            type: 'change_input',
            value: e.target.value
        }
        dispatch(action)
    },
    btnClick() {
        let action = {
            type: 'add_item'
        }
        dispatch(action)
    },
    deleteItem(index) {
        let action = {
            type: 'delete_item',
            index: index
        }
        dispatch(action)
    }
}
}
/* class TodoList extends React.Component {
    render() {
        let { inputValue, inputChange, btnClick, list } = this.props
        return (
            <div>
                <div>
                    <input placeholder={inputValue}
                        onChange={inputChange} />&nbsp;&nbsp;
                    <button onClick={btnClick}>提交</button>
                </div>
                <div>
                    <ul>
                        {
                            list.map((item, index) => {
                                return (<li key={index} onClick={() => { this.props.deleteItem(index) }}>{item}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
} 

const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        btnClick() {
            let action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        deleteItem(index) {
            let action = {
                type: 'delete_item',
                index: index
            }
            dispatch(action)
        }
    }
}*/
export default connect(stateToProps, dispatchToProps)(TodoList)