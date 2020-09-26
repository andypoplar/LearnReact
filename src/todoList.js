import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreators';
import TodoListUI from './todoListUI'

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
    return <TodoListUI 
      inputValue={this.state.inputValue}
      list={this.state.list}
      handleInputChange={this.handleInputChange}
      handleSubmitClick={this.handleSubmitClick}
      handleDeleteClick={this.handleDeleteClick}
    />
  }

  componentDidMount() {
    const action = getTodoList()
    // getTodoList 返回一个函数，通过store.dispatch，action将会被自动执行
    // 正因为这里action是一个函数，所以才用了thunk，并且会自动执行这个函数，如果不用thunk，那么这里只能是一个对象
    store.dispatch(action)
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