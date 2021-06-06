import React from 'react'
import { Button, Input, List, Divider } from "antd"
const TodoListUI=(props)=>{
    return (
        <div style={{ margin: "10px" }}>
        <Input style={{ width: "300px" }} allowClear placeholder={props.inputValues}
            onChange={props.changeInputValue} 
           value={props.inputValues}
            />&nbsp;&nbsp;
        <Button type="primary"
            onClick={props.onbtnClick}>填加</Button>
        <Divider orientation="left">Small Size</Divider>
        <List
            size="small"
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>}
        />
    </div>

    )
}
export default TodoListUI
/* export default class TodoListUI extends React.Component {
    constructor(props){
        super(props)
        this.textInput = React.createRef();
    }

    render() {

        return (
            <div style={{ margin: "10px" }}>
            <Input style={{ width: "300px" }} allowClear placeholder={this.props.inputValues}
                onChange={this.props.changeInputValue} 
               value={this.props.inputValues}
                />&nbsp;&nbsp;
            <Button type="primary"
                onClick={this.props.onbtnClick}>填加</Button>
            <Divider orientation="left">Small Size</Divider>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={this.props.list}
                renderItem={(item, index) => <List.Item onClick={() => { this.props.deleteItem(index) }}>{item}</List.Item>}
            />
        </div>
  
        )
    }
} */
