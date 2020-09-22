import React, { Component, Fragment} from 'react'
import TodoItem from './todoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmitClick = this.handleSubmitClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  render() {
    return (
      // Fragment可替代最外层的div元素
      <Fragment>
        <div>
          {/* JSX注释格式 */}
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}  
          />
          <button onClick={this.handleSubmitClick}>提交</button>
        </div>
        <div>
          <ul>{this.getTodoList()}</ul>
        </div>
      </Fragment>
    )
  }

  getTodoList() {
    return (
      this.state.list.map((item, index) => {
        return (
          <div key={index}>
            <TodoItem 
              content={item} 
              index={index}
              // 接受子组件向父组件传递的方法，注意绑定的this
              handleItemClick={this.handleDeleteClick}
            />
          </div>
        )
      })
    )
  }

  handleInputChange(e) {
    const inputValue = e.target.value
    this.setState(() => ({
      inputValue
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleSubmitClick() {
    // prevState：修改数据之前的那一次数据，等价于this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))

    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handleDeleteClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)

    this.setState(() => ({
      list
    }))

    // this.setState({
    //   list
    // })
  }
}

export default TodoList