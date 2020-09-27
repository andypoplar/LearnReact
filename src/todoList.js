import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreators';
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
    const action = getInitList()
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

/**
 * 2、组件和store做连接
 * import connect from 'react-redux'
 * 
 * const mapStateToProps = (state) => {
 *   return {
 *      inputValue: state.inputValue  // dom 中绑定的inputValue也要改变 ==> this.props.inputValue
 *    }
 * }
 * 
 * const mapDispatchToProps = (dispatch) => {
 *   return {
 *     方法名写这里
 *   }
 * }
 * export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
 */