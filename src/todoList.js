import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange) // 监听store的改变
  }

  render() {
    return (
      <Fragment>
        <div>
          <Input
            style={{width: '300px',margin: '10px 5px 0 5px'}}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleSubmitClick}>提交</Button>
        </div>
        <List
          rowKey={record => record}
          style={{width: '300px',margin: '10px 5px 0 5px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item>
              {item}
              <Button
                style={{float: 'right', marginTop: '-5px'}}
                danger
                type="text"
                onClick={() => this.handleDeleteClick(index)}
              >删除</Button>
            </List.Item>
          )}
        />
      </Fragment>
    )
  }

  // store发生变化，及时更新组件数据
  handleStoreChange() {
    this.setState(store.getState())
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleSubmitClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteClick(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList